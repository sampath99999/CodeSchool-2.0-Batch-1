-- Active: 1692350877415@@127.0.0.1@5432@social_network@public

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(10) NOT NULL UNIQUE,
        dob date,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        token VARCHAR(20)
    );

ALTER SEQUENCE users_Id_seq RESTART WITH 101;

CREATE TABLE
    posts (
        id SERIAL PRIMARY KEY,
        users_id INT REFERENCES users(id) NOT NULL,
        content VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

ALTER SEQUENCE posts_Id_seq RESTART WITH 301;

CREATE TABLE
    comments (
        id SERIAL PRIMARY KEY,
        users_id INT REFERENCES users(id) NOT NULL,
        posts_id INT REFERENCES posts(id) NOT NULL,
        comment
            VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

ALTER SEQUENCE comments_Id_seq RESTART WITH 401;

CREATE TABLE
    session (
        id SERIAL PRIMARY KEY,
        users_id INT REFERENCES Users(Id) NOT NULL,
        token VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expiry TIMESTAMP NOT NULL
    );

ALTER SEQUENCE session_Id_seq RESTART WITH 501;

DROP Table session;