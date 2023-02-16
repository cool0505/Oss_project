import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";

export class UserNutritionals extends Model{ //게시판DB

};
UserNutritionals.init(
    {
        idx:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        uid:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        nname:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        count:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
        

    },
    {
        sequelize,
        modelName: "UserNutritionals",
        tableName: "usernutrient",
        timestamps: false,
    }
);