from datetime import datetime
from server import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_nr = db.Column(db.String(50), index=True, unique=True)
    name = db.Column(db.String(100), index=True)
    price = db.Column(db.Integer)

    def __repr__(self):
        return '<Product {} | {} | {}>'.format(self.id, self.product_nr, self.name)


class StockLocation(db.Model):
    stock_nr = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), index=True, unique=True)

    def __repr__(self):
        return '<StockLocation {} | {}>'.format(self.stock_nr, self.city)


class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    stock_nr = db.Column(db.Integer, db.ForeignKey('stock_location.stock_nr'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    inbound = db.Column(db.Boolean, default=True, nullable=False)

    def __repr__(self):
        return '<Transaction {} | {} | {} | {}>'.format(self.quantity, self.stock_nr, self.product_id, self.timestamp)
