CREATE DATABASE feed_me;
\c feed_me

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

-- CREATE TABLE recipes(
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     img_url
--     api_id INT,
--     notes,
--     rating,
-- );

-- CREATE TABLE fridge_items(
--     id SERIAL PRIMARY KEY,
--     api_id INT,
--     count INT
-- )