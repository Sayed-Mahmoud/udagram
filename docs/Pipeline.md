+ # Pipeline process using CircleCI. 

**There are many other pipeline-as-a-service companies that offer a similar set of services, but for the purpose of this project, CircleCI presents a great set of features and has the advantage of being popular in the industry.**

**Pipelines are normally written inside configuration files as a list of steps. In the case of CircleCI, this file will always be located inside a .circleci folder and will be named config.yml.**

**It contains the following sections:**

**Steps:**

1. Install

2. Build

3. Deploy


+ # CircleCI version

- This is simply indicating which version of the platform our pipeline should use.

**V2.1**


+ # orbs 

- orbs are a set of instructions created by CircleCi that allow us to configure the pipeline on which we will run our actions. These instructions will instruct the server to setup specific software on the server executing our pipeline. We could use orbs to setup node.js or install the AWS CLI for example. Orbs are not always present in a pipeline.

- orgs contain basic recipes and reproducible actions (install node, AWS etc...).

**Node** node: circleci/node@4.1.0

**EB** eb: circleci/aws-elastic-beanstalk@2.0.1

**AWS-CLI** aws-cli: circleci/aws-cli@1.3.1

+ # jobs

- jobs are groups of commands that we want to run. This is where we will run commands to install, build and/or deploy our application.

+ ## build

+ ### docker

- Docker layer caching (DLC) is a great feature to use if building Docker images is a regular part of your CI/CD process. DLC will save image layers created within your jobs, rather than impact the actual container used to run your job.

- **the base image can run most needed actions with orbs** image: "cimg/base:stable"

+ ### build steps

**install Node and checkout code**

- node/install
- checkout

+ #### Use root level package.json to install dependencies in the frontend

**npm run frontend:install**


+ #### Install dependencies in the the backend API

**npm run api:install**


+ #### Build the frontend app

**npm run frontend:build**


+ #### Build the backend API

**npm run api:build**


**deploy step will run only after manual approval**
+ ## deploy

+ ### docker

- image: "cimg/base:stable"


+ ### deploy steps

- **more setup needed for AWS, Node, elastic beanstalk (EB) and checkout**

- node/install
- aws-cli/setup
- eb/setup
- checkout


#### Install, build, deploy frontend app

**npm run frontend:deploy**


#### Install, build, deploy backend app

**npm run api:deploy**

+ ## workflows

- Information about the flow of jobs in a CircleCI Pipeline.

- Workflows are instructions about the order of the jobs. They allow us to create complex flows and specify manual approvals. Workflows are not always present in a pipeline.

- The workflows section will specify how the jobs should be handled.

+ ### udagram 

+ ### jobs

#### build

#### hold

##### filters

###### branches

**only** - master

##### type

**approval**

##### requires

**build**

#### deploy

##### requires

**hold**