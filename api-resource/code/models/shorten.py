from db import db
from flask import jsonify

class ShortenModel(db.Model):
  __tablename__ = "shorten"
  id = db.Column(db.Integer, primary_key=True)
  shortUrl = db.Column(db.String(100))
  longUrl = db.Column(db.String(500))
  creation_date = db.Column(db.String(50))

  def __init__(self, id, shortUrl, longUrl, creation_date):
    self.id = id
    self.shortUrl = shortUrl
    self.longUrl = longUrl
    self.creation_date = creation_date

  def json(self):
    return { 'id': self.id, 'shortUrl': self.shortUrl, 'longUrl': self.longUrl, 'creation_date': self.creation_date }

  @classmethod
  def find_by_shorten_id(cls, id):
    return cls.query.filter_by(id=id).first()

  @classmethod
  def find_by_shorten_short_url(cls, shortUrl):
    return cls.query.filter_by(shortUrl=shortUrl).first()

  @classmethod
  def get_all(cls):
    return list(map(lambda x: x.json(), cls.query.filter().limit(5).all()))

  def save_to_db(self):
    db.session.add(self)
    db.session.commit()