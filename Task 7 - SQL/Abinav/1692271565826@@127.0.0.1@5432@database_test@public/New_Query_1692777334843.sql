-- Active: 1692271565826@@127.0.0.1@5432@database_test@public

CREATE TABLE
    offices (
        officeCode INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        city VARCHAR(100),
        phone VARCHAR(100),
        addressLine1 VARCHAR(100),
        addressLine2 VARCHAR(100),
        state VARCHAR(100),
        country VARCHAR(100),
        postalCode INT,
        territory VARCHAR(100)
    );

INSERT INTO
    offices (
        city,
        phone,
        addressLine1,
        addressLine2,
        state,
        country,
        postalCode,
        territory
    )
VALUES (
        'nalgonda',
        '8186080689',
        'vtcolony',
        'vasavistreet',
        'telangana',
        'india',
        1000,
        'a'
    ), (
        'hyderabad',
        '8125560105',
        'ctcolony',
        'srivani_street',
        'telangana',
        'india',
        10002,
        'b'
    ), (
        'karimnagar',
        '8464088164',
        'dtcolony',
        'mainstreet',
        'telangana',
        'india',
        10003,
        'c'
    ), (
        'suryapet',
        '9963784819',
        'etcolony',
        'alankarstreet',
        'telangana',
        'india',
        10004,
        'd'
    ), (
        'warangal',
        '9848328432',
        'ftcolony',
        'suryastreet',
        'telangana',
        'india',
        10005,
        'e'
    );

-- Fixed the missing postalCode value

SELECT * FROM offices;

drop Table offices;

CREATE TABLE
    employees (
        employeeNumber SERIAL PRIMARY KEY,
        lastName VARCHAR(100),
        firstName VARCHAR(100),
        extension VARCHAR(100),
        email VARCHAR(100),
        officeCode INT REFERENCES offices(officeCode),
        reportsTo INT REFERENCES employees(employeeNumber),
        jobTitle VARCHAR(100)
    );

--customer table

CREATE TABLE
    CUSTOMERS (
        customerNumber SERIAL PRIMARY KEY,
        customerName VARCHAR(100),
        contactLastName VARCHAR(100),
        phone VARCHAR(10),
        addressLine1 VARCHAR(100),
        addressLine2 VARCHAR(100),
        city VARCHAR(100),
        state VARCHAR(100),
        postalCode VARCHAR(100),
        country VARCHAR(100),
        salesRepEmployeeNumber INT REFERENCES employees(employeeNumber)
    );

INSERT INTO
    CUSTOMERS (
        customerName,
        contactLastName,
        phone,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
        salesRepEmployeeNumber
    )
VALUES (
        'ABC ',
        'Joh',
        '1234567890',
        'Main St',
        'sub st',
        'karimanagar',
        'Telanagana',
        '12345',
        'INDIA',
        2
    ), (
        'thilak',
        'chinthala',
        '8464088164',
        'vasavi',
        'nagar',
        'nalgonda',
        'Telanagana',
        '508211',
        'INDIA',
        3
    ), (
        'Arun',
        'Gunda',
        '8125560105',
        'vasavinagar',
        'mainroad',
        'nalgonda',
        'Telanagana',
        '50213',
        'INDIA',
        1
    ), (
        'vamshi',
        'chittipolu',
        '8235678956',
        'pakir_road',
        'pakir_street',
        'nalgonda',
        'Telanagana',
        '508211',
        'INDIA',
        3
    )

;

SELECT * FROM employees;

INSERT INTO
    employees (
        lastName,
        firstName,
        extension,
        email,
        officeCode,
        reportsTo,
        jobTitle
    )
VALUES (
        'Smith',
        'John',
        'x123',
        'john@example.com',
        1,
        2,
        'Manager'
    ), (
        'Johnson',
        'Jane',
        'x234',
        'jane@example.com',
        1,
        1,
        'Assistant Manager'
    ), (
        'Williams',
        'Robert',
        'x345',
        'robert@example.com',
        1,
        1,
        'Assistant Manager'
    ), (
        'Brown',
        'Emily',
        'x456',
        'emily@example.com',
        1,
        2,
        'Sales Representative'
    ), (
        'Jones',
        'Michael',
        'x567',
        'michael@example.com',
        2,
        4,
        'Manager'
    );

SELECT * FROM customers;

--order TABLE

CREATE Table
    orders(
        orderNumber SERIAL PRIMARY key,
        order_date DATE,
        required_date DATE,
        shipped_date DATE,
        status VARCHAR(30),
        comments VARCHAR(100),
        customerNumber int REFERENCES customers(customerNumber)
    );

INSERT INTO
    orders (
        order_date,
        required_date,
        shipped_date,
        status,
        comments,
        customernumber
    )
VALUES (
        '12/05/2021',
        '19/05/2021',
        '18/05/2021',
        'delivered',
        'good',
        3
    ), (
        '13/05/2021',
        '20/05/2021',
        '18/05/2022',
        'delivered',
        'bad',
        4
    );

SELECT * FROM orders;

--payments

CREATE Table
    payments(
        customerNumber int REFERENCES customers(customerNumber),
        checkNumber int UNIQUE PRIMARY key,
        paymentDate DATE,
        amount VARCHAR(100)
    );

drop Table payments;

INSERT INTO payments
VALUES (1, 205, '15/05/2021', '500'), (2, 305, '16/05/2021', '1000'), (3, 605, '20/05/2021', '1200'), (4, 306, '21/05/2021', '3500');

select * from payments;

--orderdetails TABLE

CREATE Table
    orderdetails(
        orderNumber int REFERENCES orders(orderNumber),
        productCode int REFERENCES products(productCode),
        quantityOrdered int,
        priceEach int,
        orderLineNumber int
    );

INSERT INTO
    orderdetails(
        orderNumber,
        productCode,
        quantityOrdered,
        priceEach,
        orderLineNumber
    )
VALUES (1, 1, 20, 195, 51), (2, 2, 40, 206, 52), (3, 3, 165, 95, 53), (4, 4, 85, 306, 54);

DROP Table orderdetails;

--products TABLE

CREATE Table
    products(
        productCode int UNIQUE PRIMARY key,
        productName VARCHAR(200),
        productLine int,
        productScale int,
        productVendor VARCHAR(300),
        productDescription VARCHAR(300),
        quantityInStock int,
        buyPrice Int,
        MSRP int
    )

INSERT INTO
    products (
        productcode,
        productName,
        productline,
        productscale,
        productvendor,
        productdescription,
        quantityinstock,
        buyprice,
        msrp
    )
VALUES (
        1,
        'redmi',
        1,
        100,
        'redmipvt',
        'phone',
        2,
        8000,
        9000
    ), (
        2,
        'sumsung',
        2,
        300,
        'samsungpvt',
        'phone',
        1,
        1800,
        9000
    ), (
        3,
        'sumsung',
        3,
        400,
        'sumsungpvt',
        'tab',
        3,
        8500,
        9000
    ), (
        4,
        'redmi',
        8,
        500,
        'redmipvt',
        'ac',
        1,
        9500,
        3000
    );

SELECT * FROM products;

----Queries---

--1)Retrive orders with their customer details

SELECT
    o.ordernumber,
    o.order_date,
    cust.customername,
    cust.contactlastname
from orders o
    join customers cust on o.customernumber = cust.customernumber;

--2)retrive products with there description

SELECT productName,productDescription from products;

--3)list offices and their employees

SELECT
    offices.officeCode,
    offices.city,
    employees.firstName,
    employees.lastName
FROM offices
    LEFT JOIN employees ON offices.officeCode = employees.officeCode;

-----Given Queries

--1)Top 3 companies serving customers

SELECT
    offices.officeCode,
    COUNT(customers.customerNumber) AS customerCount
FROM offices
    LEFT JOIN employees ON offices.officeCode = employees.officeCode
    LEFT JOIN customers ON employees.employeeNumber = customers.salesRepEmployeeNumber
GROUP BY offices.officeCode
ORDER BY customerCount DESC
LIMIT 3;

----2)All companies with recent order date

SELECT
    offices.officecode,max(orders.order_date)
FROM offices
    left JOIN employees on offices.officeCode = employees.officeCode
    left join customers on customers.salesrepemployeenumber = employees.employeenumber
    left join orders on orders.customernumber = customers.customernumber
GROUP BY offices.officecode
ORDER BY offices.officecode

;