# About
This application is for maintaining a company's storage that is spread out over multiple locations and needs to be maintained by multiple users.

# Architecture
The application consists of a python flask backend serving a SPA and acting as an REST-API for the DB. The frontend is an Angular application.

# API
Currently the following routes and request methods are available.
Every route should have the prefix `/api/v1`
## /products [GET, POST]
* GET: Get all available products
* POST: Add a new product

## /products/:id [GET]
* GET: info about specific product

## /stocklocations [GET, POST]
* GET: Get all available stocklocations
* POST: Add a new stocklocation

## /stocklocations/:id [GET]
* GET: info about specific stocklocation

## /transactions [GET, POST]
* GET: Get all available transactions
* POST: Add a new transaction

## /transactions/:id [GET]
* GET: info about specific transaction

# Resources
- Flask database OEM ([LINK](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database))
