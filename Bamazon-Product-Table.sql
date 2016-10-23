CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  ItemID INT(11) NOT NULL AUTO_INCREMENT,
  ProductName VARCHAR(100) NOT NULL,
  DepartmentName VARCHAR(50) NOT NULL,
  Price FLOAT NOT NULL,
  StockQuantity INT(10) NOT NULL,
  PRIMARY KEY (ItemID),
  UNIQUE INDEX ItemID_UNIQUE (ItemID ASC));
  
  
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) 
	VALUES ('DUALSHOCK 4 Gold Wireless Controller', 'Electronics', 79.99, 60);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('The Collected Works of Hayao Miyazaki ', 'Movies & TV', 224.99, 5);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('Final Fantasy XV-PlayStation 4', 'Video Games', 89.99, 20);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('Gudetama Rectangle Mousepad', 'Office Products', 10.99, 15);
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity)
	VALUES ('Final Fantasy X Moogle Plush', 'Toys', 39.99, 10);
    
SELECT * FROM bamazon_db.products;