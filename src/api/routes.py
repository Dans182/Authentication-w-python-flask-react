from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

api = Blueprint('api', __name__)


@api.route("/register", methods=["POST"])
def register():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User(email=body_email, password=body_password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"created": True, }), 200
    else:
        return jsonify({"msg": "Bad username or password"}), 401


@api.route("/login", methods=["POST"])
def login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by(
            email=body_email, password=body_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return jsonify({"token": access_token}), 200
        else:
            return jsonify({"msg": "Bad username or password"}), 401
    else:
        return jsonify({"msg": "Bad username or password"}), 401


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_id = get_jwt_identity()
    user = User.query.get(current_id)
    if user:
        return jsonify({"logged_in": True}), 200
    else:
        return jsonify({"logged_in": False}), 400
