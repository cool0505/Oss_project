import dotenv from "dotenv";
import  Sequelize  from "sequelize";
import Mysql from "mysql";
dotenv.config();
// DB 시퀄라이즈로 연결
const sequelize = new Sequelize({
    username:process.env.DB_USER,
    password:process.env.DB_PASS ,
    database:process.env.DB_DATABASE ,
    host:process.env.DB_HOST,
    dialect:"mysql"
});

export default sequelize;
