import dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  AWS_ACCESS_KEY_ID: 'AKIAQCC6UJT73IL4ZRAB',
  AWS_SECRET_ACCESS_KEY: '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',
  AWS_DEFAULT_REGION: 'us-east-1',
  AWS_REGION: 'us-east-1',
  AWS_PROFILE: 'default',
  POSTGRES_HOST: 'database-1.cbmigqbnjgzj.us-east-1.rds.amazonaws.com',
  DB_PORT: '5432',
  port: 3000,
  host: 'database-1.cbmigqbnjgzj.us-east-1.rds.amazonaws.com',
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
