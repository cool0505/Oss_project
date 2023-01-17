import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";
export class Users extends Model{
    toJSON(){
        return super.toJSON();
    }
}
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
        nickname:{
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
)

