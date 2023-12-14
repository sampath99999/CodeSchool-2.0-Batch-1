-- Active: 1692271565826@@127.0.0.1@5432@contact_managementapp@public

CREATE Table
    users(
        user_id SERIAL PRIMARY key,
        firstName VARCHAR(100),
        lastName VARCHAR(100),
        phone VARCHAR(100),
        email VARCHAR(100),
        password VARCHAR(100)
    );

ALTER TABLE users ALTER COLUMN phone TYPE varchar(100);

DROP Table users;

CREATE Table
    employee_details(
        employee_id SERIAL PRIMARY KEY,
        employee_name VARCHAR(100),
        employee_designation VARCHAR(100),
        USER_NAME VARCHAR(100) UNIQUE NOT NULL,
        PASSWORD VARCHAR(100)
    );

INSERT INTO
    employee_details (
        employee_name,
        employee_designation,
        user_name,
        password
    )
VALUES
('abi', 'Manager', 'abi', 'abi'), (
        'abinav',
        'Admin',
        'abinav',
        'abinav'
    );

CREATE Table
    leads(
        lead_id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        title VARCHAR(100) NOT NULL,
        company VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(100) NOT NULL,
        contact_method VARCHAR(50),
        comments VARCHAR(200),
        STATUS VARCHAR(100) NOT NULL,
        follow_up DATE,
        DATE DATE DEFAULT CURRENT_DATE,
        address VARCHAR(100),
        addressline2 VARCHAR(100),
        city VARCHAR(100),
        zipCode VARCHAR(100),
        websiteUrl VARCHAR(200),
        state VARCHAR(200),
        followUp VARCHAR(100)
        );
DROP Table leads;

INSERT INTO
    leads (
        first_name,
        last_name,
        title,
        company,
        phone,
        email,
        contact_method,
        comments,
        status,
        follow_up
    )
VALUES
(
        'chinthala',
        'thilak',
        'MR',
        'thilakPVT',
        '8464088164',
        'thilak@gmail.com',
        'phone',
        'good',
        'progress',
        '12-8-2023'
    );