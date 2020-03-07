from datetime import datetime
from server import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_nr = db.Column(db.String(50), index=True, unique=True)
    name = db.Column(db.String(100), index=True)
    price = db.Column(db.Integer)
    transactions = db.relationship('Transaction', backref='product', lazy='dynamic', foreign_keys = 'Transaction.product_id')

    def __repr__(self):
        return '<Product {} | {} | {}>'.format(self.id, self.product_nr, self.name)

    @property
    def serialize(self):
        """Return object data in serializeable format"""
        return {
            'id': self.id,
            'product_nr': self.product_nr,
            'name': self.name,
            'price': self.price
        }


class StockLocation(db.Model):
    stock_nr = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), index=True, unique=True)
    transactions = db.relationship('Transaction', backref='stock_location', lazy='dynamic', foreign_keys = 'Transaction.stock_nr')

    def __repr__(self):
        return '<StockLocation {} | {}>'.format(self.stock_nr, self.city)

    @property
    def serialize(self):
        """Return object data in serializeable format"""
        return {
            'stock_nr': self.stock_nr,
            'city': self.city
        }


class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    stock_nr = db.Column(db.Integer, db.ForeignKey('stock_location.stock_nr'), nullable = False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable = False)
    inbound = db.Column(db.Boolean, default=True, nullable=False)

    def __repr__(self):
        return '<Transaction {} | {} | {} | {}>'.format(self.quantity, self.inbound, self.product_id, self.timestamp)
    
    @property
    def serialize(self):
        """Return object data in serializeable format"""
        return {
            'id': self.id,
            'quantity': self.quantity,
            'timestamp': self.timestamp.timestamp(),
            'date': self.timestamp.strftime("%Y-%m-%d"),
            'stock_nr': self.stock_nr,
            'product_id': self.product_id,
            'inbound': self.inbound
        }
