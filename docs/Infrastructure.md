# Application Architecture production diagram

+ # AWS services needs

1. S3 bucket (for Frontend)

2. RDS Database

3. Elastic Beanstalk (EB) (Application and environment for backend and API)


+ # GitHub, CircleCI, Pipelines and AWS process

1. Developer pushes modifications to GitHub Source-Control Repository.

2. GitHub Creating a new commit.

3. CircleCI Syncing followed Repository commits changes to create a new Pipeline, Then deploying.

4. CircleCI pipeline Installing dependencies, Building, Then deploying, **if any step has failed, Then return to Step 1**.

5. End User goes on the site.

6. Showing Angular pages that hosted on AWS S3.

7. S3 Fetching data from Elastic Beanstalk.

8. Loading and saving data to RDS hosting.

9- Angular S3 Authenticating with Amazon Cognito.


![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/AWSCloud.png?raw=true)


+ # Database ERD

+ ## User
- id: Serial, PK,
- email: VARCHAR(255),
- passwordHash: VARCHAR(255),
- createdAt: Date, Not Null,
- updatedAt: Date, Not Null

+ ## FeedItem
- id: Serial, PK,
- caption: VARCHAR(255),
- url: VARCHAR(255),
- createdAt: Date, Not Null,
- updatedAt: Date, Not Null

+ ## Queries

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

+ ## ERD

![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/ERD.png?raw=true)


+ # API Diagram

![alt text](https://github.com/Sayed-Mahmoud/udagram/blob/master/docs/API.png?raw=true)