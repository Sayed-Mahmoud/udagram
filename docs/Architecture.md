# Application Architecture production diagram

1. Developer pushing to GitHub Source-Control Repository.
2. AWS Syncing followed Repository commits changes to update the Pipeline, Then deploying to AWS Cloud.
3. End User goes on site.
4. Showing Angular pages that hosted on AWS S3.
5. S3 Fetching data from Elastic Beanstalk.
6. Loading and saving data to RDS hosting.
7- Angular S3 Authenticating with Amazon Cognito.


![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/AWSCloud.png?raw=true)

# Database ERD

## User
- id: Serial, PK,
- email: VARCHAR(255),
- passwordHash: VARCHAR(255),
- createdAt: Date, Not Null,
- updatedAt: Date, Not Null

## FeedItem
- id: Serial, PK,
- caption: VARCHAR(255),
- url: VARCHAR(255),
- createdAt: Date, Not Null,
- updatedAt: Date, Not Null

## Queries

**Create User Table Query:** CREATE TABLE IF NOT EXISTS User 
(
	"id" SERIAL Primary Key, 
	email VARCHAR(255) Primary Key, 
	passwordHash VARCHAR(255) NOT NULL, 
	createdAt DATE NOT NULL, 
	updatedAt TEXT NOT NULL
);

**Create FeedItem Table Query:** CREATE TABLE IF NOT EXISTS FeedItem 
(
	"id" SERIAL Primary Key, 
	caption VARCHAR(255) Primary Key, 
	url VARCHAR(255) NOT NULL, 
	createdAt DATE NOT NULL, 
	updatedAt TEXT NOT NULL
);

![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/ERD.png?raw=true)

# API Diagram

![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/API.png?raw=true)