CREATE DATABASE movies_app; 
CREATE TABLE movies (
    id SERIAL4 PRIMARY KEY,
    title VARCHAR(200),
    year VARCHAR(10),
    image_url VARCHAR(400)
);
SELECT name FROM movies;
SELECT id, name, image_url FROM movies;
SELECT * FROM movies;

