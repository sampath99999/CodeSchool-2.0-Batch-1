-- Active: 1692271565826@@127.0.0.1@5432@tia@public
CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(12),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT NOW(),
        role_id INT REFERENCES roles(role_id) DEFAULT 2
);

CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE menu_items (
    menu_id SERIAL PRIMARY KEY,
    menu_name VARCHAR(255) NOT NULL,
    role_id INT REFERENCES roles(role_id),
    image_url VARCHAR(100)
);

INSERT INTO menu_items (menu_name, role_id,image_url) VALUES
    ('Dashboard', 1,'bi bi-columns-gap'), ('Manage Courses', 1,'bi bi-box-seam-fill'), ('Manage Posts', 1,'bi bi-file-earmark-image'),('Manage Tasks', 1,'bi bi-list-task'),('Manage User', 1,'bi bi-person'),
    ('Dashboard', 2,'bi bi-columns-gap'), ('Courses', 2,'bi bi-box-seam-fill'), ('Posts', 2,'bi bi-file-earmark-image'),('Tasks',2,'bi bi-list-task'),('View Profile',2,'bi bi-person');