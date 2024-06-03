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
VALUES ('Mozzarella', 'woof'), 
		('Mitchell', 'i<3u')
		('Sophia', 'Picking'),
		( 'Aiden', 'Volunteering'),
		('Olivia', 'Clearing'),
		('Ethan', 'Collecting'),
		('Emma', 'Organizing'),
		('Liam', 'Removing'),
		('Ava', 'Helping'),
		('Noah', 'Participating'),
		('Chloe', 'Clearing'),
		('Jackson', 'Cleaning'),
		('Sophie', 'Volunteering'),
		('William', 'Assisting'),
		('Theo', 'Picking'),
		('Logan', 'Collecting'),
		('Grace', 'Organizing'),
		('Henry', 'Removing'),
		('Emily', 'Poop')

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
	username VARCHAR,
	crush_text VARCHAR,
	date_time NULL,
	where_crushed VARCHAR,
	photo_url NULL,
	star_count VARCHAR
);
-- "date_time" timestamp with time zone,
CREATE TABLE post (
	post_id SERIAL PRIMARY KEY,
	user_id VARCHAR,
	username VARCHAR,
	crush_text VARCHAR,
	where_crushed VARCHAR,
	star_count VARCHAR
);

INSERT INTO "post" ("user_id", "username", "crush_text", "where_crushed", "star_count")
VALUES 
('3', 'Mozzarella', 'Spent the day at the River', 'Minnehaha Off-Leash Dog Park', '3'), 
('4', 'Mitchell', 'Cleaning up the Grand Rounds!', 'Lake Bde Maka Ska', '29'),
('1', 'lexi', 'I found pizza boxes, car parts, and all kinds of nicotine products', 'NE Community Garden Grove', '5'),
('4', 'Sophia', 'Picking up trash along the hiking trail', 'State Park', '15'),
('5', 'Aiden', 'Volunteering at the local beach cleanup', 'Oceanfront', '22'),
('7', 'Olivia', 'Clearing litter at the park', 'Central Park', '10'),
('8', 'Ethan', 'Collecting plastic bottles on the roadside', 'City Streets', '18'),
('9', 'Emma', 'Organizing a neighborhood cleanup event', 'Local Neighborhood', '30'),
('10', 'Liam', 'Removing trash from the riverbank', 'Riverfront Park', '12'),
('11', 'Ava', 'Helping to clean up after a community event', 'Community Center', '25'),
('12', 'Noah', 'Participating in a river cleanup project', 'River Trail', '17'),
('13', 'Chloe', 'Clearing litter from the school grounds', 'School Campus', '8'),
('14', 'Theo', 'Cleaning up trash from the city park', 'City Park', '14'),
('15', 'Sophie', 'Volunteering at a local conservation area', 'Conservation Area', '20'),
('16', 'William', 'Assisting in cleaning up a local playground', 'Playground', '7'),
('17', 'Charlotte', 'Picking up litter during a nature hike', 'Nature Reserve', '11'),
('18', 'Logan', 'Collecting garbage along the riverfront trail', 'Riverfront Trail', '19'),
('19', 'Grace', 'Organizing a beach cleanup with friends', 'Beach', '27'),
('20', 'Henry', 'Removing litter from the roadside', 'Highway', '13'),
('21', 'Emily', 'Participating in a community cleanup day', 'Community Park', '16');