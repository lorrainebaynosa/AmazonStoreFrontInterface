DROP DATABASE IF EXISTS bamazon;

-- creates bamazon database
CREATE DATABASE bamazon;

-- specifies that we will be using bamazon database; will store to table products in bamazon database
USE bamazon;

-- creating products table within bamazon database, where item_id, product_name, department_name, price, stock_quantity, and primary key are columns/features/attributes of the table
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(30) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

-- adding rows with specified values for each cell, containing 10 different products
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
    ('glass teapot', 'kitchen', 19.99, 20),
    ('yoga mat', 'exercise', 24.99, 50),
    ('compression stockings', 'clothing', 9.25, 50),
    ('yellow legal pad, 12 pads per pack', 'office', 17.50, 100),
    ('avery two-pocket folder, box of 25', 'office', 7.50, 100),
    ('Obagi 3 oz SPF 50 sunscreen', 'beauty', 53,00, 200),
    ('L.O.L surprise underwraps doll', 'toys', 13.88, 150),
    ('KitchenAid 4.5qt stand mixer, silver', 'kitchen', 199.99, 25),
    ('UPOWEX resistance bands set', 'exercise', 23.99, 50),
    ('Samsung UN65RU7 flat 65in smart TV', 'electronics', 777.99, 30),
    ('Apple MacBook Pro, 13in 128GB', 'electronics', 19.99, 50),
    ('Omega Deville Ladies Watch', 'watches', 8975.00, 5);

-- Displaying all columns from products table, with columns ordered by department_name followed by product_name in ascending order (alphabetical order from A-Z)

SELECT *
    FROM products
    ORDER BY department_name, product_name;



