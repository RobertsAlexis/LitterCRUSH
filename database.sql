-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "user_id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "post" (
	post_id SERIAL PRIMARY KEY
	user_id text > user.user_id
	crush_text text
	date_time timestamp with time zone
	where_crushed text
	photo_url integer
	star_count integer > user.star_count
)