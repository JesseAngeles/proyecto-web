\c postgres
DROP DATABASE dof;
CREATE DATABASE dof;
\c dof

CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    username VARCHAR(50),
    password VARCHAR(50),
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);



