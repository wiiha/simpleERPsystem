from server import db
from server.models import Product,StockLocation,Transaction

p1 = Product.query.get(1)
p2 = Product.query.get(2)