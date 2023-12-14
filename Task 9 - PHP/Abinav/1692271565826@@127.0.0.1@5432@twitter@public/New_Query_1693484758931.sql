-- Active: 1692271565826@@127.0.0.1@5432@twitter@public

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(12),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255),
        bio TEXT,
        profile_image_url VARCHAR(255),
        followers VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT NOW()
    );

DROP TABLE users;

DELETE FROM users;

CREATE TABLE
    followers (
        user_id INT REFERENCES users(id),
        follower_id INT REFERENCES users(id),
        CONSTRAINT unique_follow_relationship UNIQUE (user_id, follower_id)
    );

DROP TABLE followers;

ALTER TABLE users DROP COLUMN posts_id 

CREATE TABLE
    tweets(
        tweet_id SERIAL PRIMARY key,
        user_id INT REFERENCES users(id),
        tweet_text VARCHAR(500),
        tweet_image_url VARCHAR(100),
        tweet_likes VARCHAR(20)
    );

DROP TABLE tweets;

DELETE FROM tweets;

ALTER TABLE tweets ALTER COLUMN tweet_likes SET DEFAULT 0;

CREATE TABLE
    LIKES(
        tweet_id int REFERENCES tweets(tweet_id) NOT NULL,
        liked_by_id int REFERENCES users(id) NOT NULL,
        CONSTRAINT unique_like_relationship UNIQUE (tweet_id, liked_by_id)
    );

DROP Table likes;