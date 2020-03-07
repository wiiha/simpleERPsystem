from flask import render_template
from server import app

API_PREFIX = '/api/v1'


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title="test Title")


@app.route(API_PREFIX + '/')
def api_root():
    return 'API ROOT'
