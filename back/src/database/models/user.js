import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";
export class Users extends Model{ //유저 정보 DB

};
Users.init(
    {
        id:{
            type: DataTypes.STRING(20),
            primaryKey:true
        },
        pw:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(20),
            allowNull:false,
            unique: true
        },

    },
    {
        sequelize,
        modelName: "Users",
        tableName: "user",
        timestamps: false,

    }
);

