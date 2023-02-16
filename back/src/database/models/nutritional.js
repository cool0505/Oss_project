import sequelize from "../config/db.js";
import { DataTypes, Model } from "sequelize";

export class Nutritionals extends Model{ //게시판DB

};
Nutritionals.init(
    {
        nutritional_id:{
            type: DataTypes.STRING(100),
            primaryKey:true
        },
        nutritional_name:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        price:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        barcode:{
            type: DataTypes.STRING(30),
            allowNull:false
        },
        stars:{
            type: DataTypes.STRING(30),
            allowNull:false
        },
        caution:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        nutritional_info:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        link:{
            type: DataTypes.TEXT,
            allowNull:false
        }

    },
    {
        sequelize,
        modelName: "Nutritionals",
        tableName: "nutritional",
        timestamps: false,
    }
);