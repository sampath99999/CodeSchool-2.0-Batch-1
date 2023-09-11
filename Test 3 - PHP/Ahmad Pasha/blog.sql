-- Active: 1692271638519@@127.0.0.1@5432@blog@public

CREATE TABLE
    users(
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(250) UNIQUE NOT NULL,
        created_at TIMESTAMP,
        updated_at TIMESTAMP,
        token VARCHAR(250) NOT NULL
    );

INSERT INTO
    users(
        name,
        password,
        created_at,
        updated_at,
        token
    )
VALUES (
        'ahmad_123',
        'ahmad123',
        now(),
        now(),
        'ag364evusage*'
    );

CREATE TABLE
    categories(
        id SERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(150) NOT NULL UNIQUE,
        created_at TIMESTAMP,
        updated_at TIMESTAMP
    );

CREATE TABLE
    posts(
        id SERIAL,
        name VARCHAR(150) NOT NULL,
        description VARCHAR(400) NOT NULL,
        category VARCHAR(100) NOT NULL,
        image_url VARCHAR(250) NOT NULL,
        created_at TIMESTAMP,
        updated_at TIMESTAMP,
        user_id INT REFERENCES users(id)
    );