-- Active: 1692271874209@@127.0.0.1@5432@shop@public
CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        phone VARCHAR(20) UNIQUE NOT NULL,
        password VARCHAR(255),
        role_id INT NOT NULL REFERENCES roles(id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        token VARCHAR(255)
);

INSERT INTO users VALUES(name,email,phone,password,role_id,created_at)
("Harsha","harsha@gmail.com","9876543210","Harsha@123",2);

CREATE TABLE roles (
        id SERIAL PRIMARY KEY,
        role_name VARCHAR(10)
);

INSERT INTO roles("role_name") VALUES ('admin'), ('user');

select * from roles;
select * from users;


CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        category VARCHAR(30)
    );

INSERT INTO categories("category")
VALUES ('Cloths'), ('Gadgets'), ('Footwear');

CREATE TABLE products(
        id SERIAL PRIMARY KEY,
        product_image VARCHAR(200),
        name VARCHAR(100),
        product_price INT,
        rating INTEGER DEFAULT 0,
        reviews VARCHAR(20),
        size VARCHAR(10),
        category_id INT NOT NULL REFERENCES categories(id)
    );


select * from products;