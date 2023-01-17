import mysql from "mysql";
import dotenv from "dotenv";
import  Sequelize  from "sequelize";
dotenv.config();
/* const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_DATABASE
});

db.connect()

export default db;
 */
const sequelize = new Sequelize({
    username:process.env.DB_USER,
    password:process.env.DB_PASS ,
    database:process.env.DB_DATABASE ,
    host:process.env.DB_HOST,
    dialect:"mysql"
});

export default sequelize;
