from server import db
from server.models import Product,StockLocation,Transaction

p1 = Product(product_nr="P001",name="jTelefon", price=8900)
p2 = Product(product_nr="P002",name="jPlatta", price=5700)
p3 = Product(product_nr="P003",name="Päronklocka", price=11000)

db.session.add(p1)
db.session.add(p2)
db.session.add(p3)

sl1 = StockLocation(city="Cupertino")
sl2 = StockLocation(city="Norrköping")
sl3 = StockLocation(city="Frankurt")


db.session.add(sl1)
db.session.add(sl2)
db.session.add(sl3)

db.session.commit()

t1 = Transaction(quantity=100000,stock_location=sl3,product=p1, inbound=True)
t2 = Transaction(quantity=5000,stock_location=sl2,product=p3, inbound=False)
t3 = Transaction(product=p1,stock_location=sl2,quantity=5000, inbound=True)
t4 = Transaction(product=p2,stock_location=sl1,quantity=40000, inbound=True)
t5 = Transaction(product=p2,stock_location=sl1,quantity=25000, inbound=False)
t6 = Transaction(product=p1,stock_location=sl2,quantity=50000, inbound=False)
t7 = Transaction(product=p3,stock_location=sl3,quantity=20000, inbound=True)
t8 = Transaction(product=p1,stock_location=sl1,quantity=45000, inbound=True)

# t = Transaction(product_id=10,stock_nr=1,quantity=45000, inbound=True)


db.session.add(t1)
db.session.add(t2)
db.session.add(t3)
db.session.add(t4)
db.session.add(t5)
db.session.add(t6)
db.session.add(t7)
db.session.add(t8)

db.session.commit()