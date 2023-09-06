-- Active: 1692271874209@@127.0.0.1@5432@facebook@public

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_no VARCHAR(10) NOT NULL UNIQUE,
    gender VARCHAR NOT NULL CHECK(gender IN('Female','Male')),
    dob date NOT NULL,
    friends_count INT DEFAULT '0',
    status BOOLEAN NOT NULL DEFAULT true,
    token VARCHAR(255)
);

ALTER Table users 
add column token VARCHAR(255);

drop table users;
select * from users;

INSERT INTO users(username,password,first_name,last_name,email,phone_no,gender,dob,friends_count,status)
VALUES('Harsha','Hasha@123','Harshasri','Yennam','harsha@gmail.com','9191918181','Female','01-01-2000',20,true);
INSERT INTO users(username,password,first_name,last_name,email,phone_no,gender,dob,friends_count,status)
VALUES('Pavani','Pavani@123 ','Pavani','Yennam','pavani@gmail.com','9191918188','Female','01-01-2001',30,true);


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    content TEXT NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);

select * from posts;
DROP table posts;
DROP table LIKES;

ALTER TABLE posts
DROP COLUMN post_img;

alter table posts
add column post_img varchar(255);

INSERT INTO posts (user_id, content,created_date,updated_date,post_img) VALUES (1, 'This is my first post.',NOW(),NOW(),('https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=500&height=400')),
(2, 'this post by user2',NOW(),NOW(),('https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=500&height=400')),
(1, 'This is my first post.',NOW(),NOW(),('https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=500&height=400')),
(2, 'This is my first post.',NOW(),NOW(),('https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=500&height=400'));
INSERT INTO posts (user_id, content,created_date,updated_date,post_img) VALUES (localStorage.getItem("token"), 'This is my first post.',NOW(),NOW(),('https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=500&height=400'));
UPDATE posts
SET post_img='https://images.unsplash.com/photo-1675887057159-40fca28fdc5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
WHERE id = 3;

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    like_status BOOLEAN DEFAULT FALSE,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);

INSERT INTO likes (user_id, post_id,like_status,created_date,updated_date)
VALUES
    (1, 1,TRUE,NOW(),NOW()),
    (2, 3,TRUE,NOW(),NOW()),
    (1, 2,FALSE,NOW(),NOW());
INSERT INTO likes (user_id, post_id,like_status,created_date,updated_date)
VALUES
    (1, 3,FALSE,NOW(),NOW());
INSERT INTO likes (user_id, post_id,like_status,created_date,updated_date)
VALUES
    (3, 6,FALSE,NOW(),NOW());
  
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    content TEXT NOT NULL,
    created_date TIMESTAMP NOT NULL,
    updated_date TIMESTAMP NOT NULL
);


INSERT INTO comments (user_id, post_id, content,created_date,updated_date)
VALUES
    (1, 1, 'This is the first comment on post 1.',NOW(),now()),
    (2, 1, 'Nice post!',NOW(),now()),
    (1, 2, 'Great content on post 2.',NOW(),now()),
    (1, 3, 'wow!!',NOW(),now());

select * from comments;
-- User 1 sends a friend request to User 2, and User 2 accepts/reject the request.
CREATE TABLE friendships(
    id SERIAL PRIMARY KEY,
    user1_id INT REFERENCES users(id),
    user2_id INT REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL
);  

insert into friendships
(user1_id,user2_id,status,created_at) VALUES(1,2,'pending',now());

insert into friendships
(user1_id,user2_id,status,created_at) VALUES(1,3,'accepted',now());
insert into friendships
(user1_id,user2_id,status,created_at) VALUES(1,4,'accepted',now());
insert into friendships
(user1_id,user2_id,status,created_at) VALUES(2,3,'accepted',now());
insert into friendships
(user1_id,user2_id,status,created_at) VALUES(1,5,'accepted',now());

select * from friendships;

-- //queries
-- get all post by peticular user
SELECT * FROM posts WHERE user_id = 1;
SELECT * FROM posts;
SELECT * FROM comments;


-- //all posts
SELECT p.*, u.username FROM posts p
INNER JOIN users u ON p.user_id = u.id
WHERE u.id <> 1
ORDER BY p.created_date DESC;


-- //friends
SELECT users.id, users.username
FROM friendships
JOIN users ON friendships.user2_id = users.id
WHERE friendships.user1_id = 1
AND friendships.status = 'accepted';

SELECT users.id, users.username
FROM friendships
JOIN users ON friendships.user2_id = users.id
WHERE friendships.user1_id = 1
AND friendships.status = 'pending';

SELECT * from users;
SELECT * from friendships;


select user2_id from friendships
WHERE user1_id = 1
AND friendships.status = 'accepted';

select * from posts;
select * from comments;
delete from posts where id=20;

select * from likes;