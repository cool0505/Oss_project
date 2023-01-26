import sequelize from "./index.js";
import { DataTypes, Model } from "sequelize";

export class Users extends Model{
    //buffer에 저장하면 binary 형태로 저장이 되기 때문에 json type으로 다시 변환시켜주기 위함
    toJSON(){
        return super.toJSON();
    }

}

Users.init(
    {
        id:{
            type: DataTypes.STRING(20),
            primaryKey : true
        },
        pw:{
            type: DataTypes.STRING(60),
            allowNull : false
        },
        name:{
            type: DataTypes.STRING(20),
            allowNull : false
        },
        nickname:{
            type: DataTypes.STRING(20),
            allowNull : false,
            unique : true
        },

    },

    {
        sequelize,
        modelName : "Users",
        tableName : "user",
        timestamps : false
    }
)