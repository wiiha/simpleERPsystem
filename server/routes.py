from flask import render_template, abort, jsonify
from server import app
from server.models import Product,StockLocation,Transaction

API_PREFIX = '/api/v1'


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title="test Title")


@app.route(API_PREFIX + '/')
def api_root():
    return 'API ROOT'

@app.route(API_PREFIX + '/products', methods=['GET'])
def get_all_products():
    ps = Product.query.all()
    return jsonify(products=[p.serialize for p in ps])

@app.route(API_PREFIX + '/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    p = Product.query.get(product_id)
    return jsonify(product=p.serialize)


@app.route(API_PREFIX+'/test/<int:test_id>', methods=['GET'])
def test_par(test_id):
    return jsonify({'test_id':test_id})
