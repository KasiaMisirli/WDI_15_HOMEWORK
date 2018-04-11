CREATE DATABASE dogs;
CREATE TABLE dogs (
    id SERIAL4 PRIMARY KEY,
    name VARCHAR(200),
    image_url VARCHAR(400)
);
SELECT name FROM dogs;
SELECT id, name, image_url FROM dogs;
SELECT * FROM dogs;

INSERT INTO dogs (name,image_url) VALUES ('italian greyhound',
'https://img1.etsystatic.com/217/0/12318733/il_570xN.1365023513_a7v0.jpg');
