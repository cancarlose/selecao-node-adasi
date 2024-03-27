const dotenv = require('dotenv');
const { DataSource } = require("typeorm");

dotenv.config();

const portString = process.env.DB_PORT;
const userName = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME
const port = portString ? parseInt(portString) : undefined;

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: userName,
  password: password,
  database: database,
  synchronize: true,
  logging: true,
  migrations: ["./src/migrations/*.ts"],
});

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error: any) => {
    console.error("Error during Data Source initialization", error);
  });

module.exports = PostgresDataSource;