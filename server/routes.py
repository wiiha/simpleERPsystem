from flask import render_template, abort, jsonify, request
from server import app, db
from server.models import Product, StockLocation, Transaction
import sys
from sqlalchemy.exc import IntegrityError

API_PREFIX = '/api/v1'


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title="test Title")

# This route is just for easier navigation during development
@app.route(API_PREFIX + '/')
def api_root():
    routes = [API_PREFIX + '/products',
              API_PREFIX + '/stocklocations',
              API_PREFIX + '/transactions'
              ]
    return render_template('apiRoot.html', routes=routes)


@app.route(API_PREFIX + '/products', methods=['GET', 'POST'])
def get_all_products():
    if request.method == 'POST':
        in_product = request.get_json()
        try:
            p = Product(product_nr=in_product['product_nr'],
                        name=in_product['name'], price=in_product['price'])
        except KeyError:
            abort(500)

        db.session.add(p)
        try:
            db.session.commit()
            return jsonify(p.serialize)
        except IntegrityError:
            db.session.rollback() 
            abort(500)
    else:
        ps = Product.query.all()
        return jsonify(products=[p.serialize for p in ps])


@app.route(API_PREFIX + '/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    p = Product.query.get(product_id)
    return jsonify(product=p.serialize)


@app.route(API_PREFIX + '/stocklocations', methods=['GET'])
def get_all_stocklocations():
    sls = StockLocation.query.all()
    return jsonify(stocklocations=[sl.serialize for sl in sls])


@app.route(API_PREFIX + '/stocklocations/<int:stocklocation_id>', methods=['GET'])
def get_stocklocation(stocklocation_id):
    s = StockLocation.query.get(stocklocation_id)
    return jsonify(stocklocation=s.serialize)


@app.route(API_PREFIX + '/transactions', methods=['GET'])
def get_all_transactions():
    ts = Transaction.query.all()
    return jsonify(transactions=[t.serialize for t in ts])


@app.route(API_PREFIX + '/transactions/<int:transactions_id>', methods=['GET'])
def get_transaction(transactions_id):
    t = Transaction.query.get(transactions_id)
    return jsonify(transaction=t.serialize)


@app.route(API_PREFIX+'/test/<int:test_id>', methods=['GET'])
def test_par(test_id):
    return jsonify({'test_id': test_id})
