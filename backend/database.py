from pymongo import MongoClient
import os

client = MongoClient("mongodb+srv://thantzinwin1843:thantzinwin1843@cluster0.nh4s1hb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.uni_repo  # uni_repo is your database name
user_collection = db.users  # users is your collection
question_collection = db.questions  # questions is your collection
comment_collection = db.comments  # comments is your collection
answer_collection = db.answers  # answers is your collection
