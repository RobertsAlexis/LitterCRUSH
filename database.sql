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


CREATE TABLE "post" (
	"post_id" SERIAL PRIMARY KEY,
	"user_id" VARCHAR,
	"crush_text" VARCHAR,
	"date_time" NULL,
	"where_crushed" VARCHAR,
	"photo_url" NULL,
	"star_count" VARCHAR
);
-- "date_time" timestamp with time zone,


-- Pratice Data
INSERT INTO "post" ("user_id", "crush_text", "where_crushed", "star_count")
VALUES ('Mozzarella', 'Spent the day at the River', 'Minnehaha Off-Leash Dog Park', '3'), 
       ('Mitchell', 'Cleaning up the Grand Rounds!', 'Lake Bde Maka Ska', '29');
