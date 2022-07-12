import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  "postgres://postgres:321456Sa@database-1.cbmigqbnjgzj.us-east-1.rds.amazonaws.com:5432/postgres"
);
/*
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host + '',
  port: 5432,
  dialect: "postgres",
  storage: ":memory:",
});
*/