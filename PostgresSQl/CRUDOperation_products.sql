CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO products (name, description, price, stock)
VALUES ('Laptop', 'High-performance laptop', 999.99, 10);

SELECT * FROM products;

UPDATE products
SET price = 1099.99
WHERE name = 'Laptop';

ALTER TABLE products
ADD COLUMN manufacturer VARCHAR(100);

DELETE FROM products
WHERE name = 'Laptop';

DROP TABLE products;
