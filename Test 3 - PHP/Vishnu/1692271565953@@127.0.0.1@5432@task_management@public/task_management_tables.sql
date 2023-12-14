-- Active: 1692271565953@@127.0.0.1@5432@task_management@public

--users table
CREATE TABLE
    users(
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        phone VARCHAR(10) NOT NULL UNIQUE CHECK (LENGTH(phone) = 10),
        email VARCHAR(50) NOT NULL UNIQUE,
        gender VARCHAR(10) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role_type_id INTEGER NOT NULL DEFAULT 2 REFERENCES role_types(id),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
    );

SELECT * from users;

update users set role_type_id=1 where id=1;

--drop users 
drop Table users;

--roles table 
CREATE TABLE role_types
    (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        description text NOT NULL UNIQUE
    );

drop Table role_types;

--insert roles 
INSERT INTO role_types(description)VALUES('Admin'),('User');

--select roles 
SELECT * from role_types;

--tasks table 
CREATE TABLE
    tasks(
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        users_id INTEGER NOT NULL,
        status_id INTEGER NOT NULL REFERENCES status(id),
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
    );

drop Table tasks;
--status table 
CREATE TABLE status
    (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        description text NOT NULL UNIQUE
    );

--insert status
INSERT INTO status(description)VALUES('Assigned'),('Started'),('Completed');

--select status  
SELECT * FROM status;

drop Table status;

create TABLE token(
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    users_id INTEGER NOT NULL REFERENCES users(id),
    token TEXT NOT NULL
);

select * from token;

select status.description,count(*) as no_of_tasks from tasks inner join status on tasks.status_id=status.id group by status.description;

