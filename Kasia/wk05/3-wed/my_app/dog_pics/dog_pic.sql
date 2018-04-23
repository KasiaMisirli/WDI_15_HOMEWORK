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

CREATE TABLE comments (
    id SERIAL4 PRIMARY KEY,
    content VARCHAR(400) NOT NULL,
    dog_id INTEGER NOT NULL,
    FOREIGN KEY (dog_id) REFERENCES dogs (id) 
    ON DELETE CASCADE
);

INSERT INTO comments (content, dog_id) VALUES ('great',2);