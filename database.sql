-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
-- Pratice Data
INSERT INTO "user" ("username", "password")
VALUES ('Mozzarella', 'woof'), ('Mitchell', 'i<3u')

-- MVP TABLE 
CREATE TABLE post (
	post_id SERIAL PRIMARY KEY,
	user_id VARCHAR,
	username VARCHAR,
	crush_text VARCHAR,
	where_crushed VARCHAR,
	star_count VARCHAR
);

-- FUTURE TABLE 

CREATE TABLE post (
	post_id SERIAL PRIMARY KEY,
	user_username VARCHAR,
	crush_text VARCHAR,
	date_time NULL,
	where_crushed VARCHAR,
	photo_url NULL,
	star_count VARCHAR
);
-- "date_time" timestamp with time zone,


-- Pratice Data
INSERT INTO "post" ("user_id", "username", "crush_text", "where_crushed", "star_count")
VALUES ('3', 'Mozzarella', 'Spent the day at the River', 'Minnehaha Off-Leash Dog Park', '3'), 
       ('4', 'Mitchell', 'Cleaning up the Grand Rounds!', 'Lake Bde Maka Ska', '29');
	   ('1', 'lexi', 'I found pizza boxes, car parts, and all kinds of nicotine products', 'NE Community Garden Grove', '5');


