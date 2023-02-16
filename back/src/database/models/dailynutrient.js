import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";

export class Dailynutrient extends Model{ //게시판DB

};
Dailynutrient.init(
    {
        idx:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        age:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
        gender:{
            type: DataTypes.STRING(10),
            allowNull:false
        },
        commend:{
            type: DataTypes.STRING(20),
            allowNull:true
        },
        max:{
            type: DataTypes.STRING(20),
            allowNull:true
        },
        unit:{
            type: DataTypes.STRING(10),
            allowNull:true
        },
        nutrient_name:{
            type: DataTypes.STRING(45),
            allowNull:true
        },

    },
    {
        sequelize,
        modelName: "Dailynutrient",
        tableName: "dailynutrient",
        timestamps: false,
    }
);