from flask import Blueprint, request, redirect, url_for, send_from_directory
from .models import db, User
import os

main = Blueprint('main', __name__)

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), 'public')

@main.route('/')
def home():
    return send_from_directory(PUBLIC_DIR, 'index.html')

@main.route('/public/<path:filename>')
def public_files(filename):
    return send_from_directory(PUBLIC_DIR, filename)

@main.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()
        if user and user.check_password(password):
            return f"Logged in as {username}"
        return redirect(url_for('main.login', error='1'))
    return send_from_directory(PUBLIC_DIR, 'login.html')

@main.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if User.query.filter_by(username=username).first():
            return redirect(url_for('main.register', error='exists'))
        user = User(username=username)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('main.login', registered='1'))
    return send_from_directory(PUBLIC_DIR, 'register.html')
