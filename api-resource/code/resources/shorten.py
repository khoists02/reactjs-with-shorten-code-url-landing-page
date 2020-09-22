from flask_restful import Resource, reqparse, request
from urllib.parse import urlparse
import string, sqlite3
from math import floor
from models.shorten import ShortenModel
from random import choice
import hashlib
import sys
import datetime

class Shorten(Resource):
  parser =  reqparse.RequestParser()

  parser.add_argument('id', 
    type=int,
    required=False,
  )

  parser.add_argument('shortUrl', 
    type=str,
    required=False,
  )
  
  parser.add_argument('longUrl', 
    type=str,
    required=False,
  )

  parser.add_argument('creation_date', 
    type=str,
    required=False,
  )

  def get(self):
    shorten_url = request.args['shorten_url']
    if shorten_url == "":
      return { 'message': 'Not found shorten url' }, 400
    
    result = ShortenModel.find_by_shorten_short_url(shorten_url)
    
    return {"shorten": result.json() }, 200

  def post(self):
    data = Shorten.parser.parse_args()
    original_url = data["longUrl"]

    if original_url is None or original_url == "":
      return {"message": "URL can't blank !"}, 400
    if urlparse(original_url).scheme == '':
        original_url = 'http://' + original_url

    data['shortUrl'] = self.get_md5_bytes_as_base62(original_url)
    data['longUrl'] = original_url
    # currentdate = datetime().now().__str__()
    # data['creation_date'] = currentdate
    # currentdate = datetime.date.today
    # now = datetime.datetime().now()
    # date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    data['creation_date'] = '2020/09/22'

    shorten = ShortenModel(**data)

    try:
      shorten.save_to_db()
    except:
      return {"message": "Something was wrong when you try to create this shorten"}, 500
    
    # HERE IS CONVERT SHORTEN URL
    return { 'shorten': shorten.json() }, 201

  def get_md5_bytes_as_base62(self, urlstring):
    digestStr = hashlib.md5(urlstring.encode('utf-8')).hexdigest()

    #Above is 32 char (2 char per byte so 128 bit hash)

    #Lets take only first 10 digits for shortness
    digestStr = digestStr[:10]

    md5int = int(digestStr, 16)

    #Add current micro seconds to bring uniqueness
    md5int += datetime.datetime.now().microsecond
    return self.base62_encode_i(md5int)

  def base62_encode_i(self, dec):
    s = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ret = ''
    while dec > 0:
      ret = s[dec % 62] + ret
      dec = int(dec/62)
    return ret


class ShortenList(Resource):
  def get(self):
    # get take arguments
    pageSize = request.args.get('pageSize')
    page = request.args.get('page')

    shortens = ShortenModel.get_all(page, pageSize)
    return {"shortens": shortens}, 200