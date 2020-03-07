from server import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_nr = db.Column(db.String(50), index=True, unique=True)
    name = db.Column(db.String(100), index=True)
    price = db.Column(db.Integer)

    def __repr__(self):
        return '<Product {} | {} | {}>'.format(self.id,self.product_nr,self.name)

class StockLocation(db.Model):
    stock_nr = db.Column(db.Integer, primary_key=True)
    city = db.Column(db.String(100), index=True, unique=True)