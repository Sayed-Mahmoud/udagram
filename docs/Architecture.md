# Application Architecture production diagram

+ # App dependencies

+ - **TypeScript:** TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. converts to JavaScript, TypeScript which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

+ - **ts-node:** ts-node is a TypeScript execution engine and REPL for Node.js.

+ - **sequelize:** Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.

+ - **dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

+ - **jsonwebtoken:** JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

+ - **pg:** node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database. It has support for callbacks, promises, async/await, connection pooling, prepared statements.

+ - **db-migrate:** Database migration framework for node.js

+ - **cors:** CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

+ - **bcryptjs:** Optimized bcrypt in JavaScript with zero dependencies. Compatible to the C++ bcrypt binding on node.js and also working in the browser.

+ - **body-parser:** Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

+ - **express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love. alson Many popular frameworks are based on Express.

+ - **email-validator:** A simple module to validate an e-mail address.

+ - **reflect-metadata:** reflect-metadata Allows you to do runtime reflection on types. The native (non reflect-metadata) version of type inference is much poorer than reflect-metadata and consists only of typeof and instanceof.

+ - **angular:** Angular is a development platform for building mobile and desktop web applications
using Typescript/JavaScript and other languages.

+ - **ionic:** Ionic is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

+ - **karma:** Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.

+ - **protractor:** Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

+ - **TSLint:** TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters.

+ - **codelyzer:** A set of tslint rules for static code analysis of Angular TypeScript projects.

+ - **jasmine:** Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

+ - **mocha:** Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

+ - **chai:** Chai is a BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

+ - **aws-sdk:** Develop and deploy applications with the AWS SDK for JavaScript. The SDK provides first class TypeScript support and makes it easy to call AWS services using idiomatic JavaScript APIs to build Node.js, web, and mobile web applications.

+ - **eb:** AWS Elastic Beanstalk for Node.js makes it easy to deploy, manage, and scale your Node.js web applications using Amazon Web Services. Elastic Beanstalk for Node.js is available to anyone developing or hosting a web application using Node.js. This chapter provides step-by-step instructions for deploying your Node.js web application to Elastic Beanstalk using the Elastic Beanstalk management console, and provides walkthroughs for common tasks such as database integration and working with the Express framework.

+ - **aws-cli:** The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.


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