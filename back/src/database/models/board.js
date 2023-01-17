import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";

export class Boards extends Model{
    toJSON(){
        return super.toJSON();
    }
}
Boards.init(
    {
        idx:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        title:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        writer:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        nickname:{
            type: DataTypes.STRING(20),
            allowNull:false,
        },
        main:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        time:{
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }

    },
    {
        sequelize,
        modelName: "Boards",
        tableName: "board",
        timestamps: false,

    }
)