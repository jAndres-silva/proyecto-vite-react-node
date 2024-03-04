import { Sequelize } from "sequelize";

const db = new Sequelize("base_de_datos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
