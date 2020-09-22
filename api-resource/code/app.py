from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from db import db

from resources.shorten import Shorten 
from flask_shorturl import ShortUrl

# CONFIGURATION
app = Flask(__name__)
app.secret_key = 'khoile22071993'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///shorten.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# CORS
CORS(app)

# DEFINE API
api = Api(app)

# CREATE TABLES
@app.before_first_request
def create_tables():
  db.create_all()

# JWT
# jwt = JWT(app, authenticate, identity)

# ADD RESOURCES
api.add_resource(Shorten, '/shorten')


# RUN MAIN
if __name__ == "__main__":
  db.init_app(app)
  app.run(port=5000, debug=True)
