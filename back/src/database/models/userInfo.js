import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";
export class UserInfo extends Model{
    toJSON(){
        return super.toJSON();
    }
}
UserInfo.init(
    {
        id:{
            type: DataTypes.STRING(20),
            primaryKey:true
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull:true
        },
        gender:{
            type: DataTypes.STRING(1),
            allowNull:true
        },
        height:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        weight:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        nutrients:{
            type: DataTypes.STRING(20),
            allowNull:true
        },
        count:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
    },
    {
        sequelize,
        modelName: "UserInfo",
        tableName: "userinfo",
        timestamps: false,

    }
)