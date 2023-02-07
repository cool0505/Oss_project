import { Users } from "./models/user.js";
import { UserInfo } from "./models/userinfo.js"
import { UserNutrient } from "./models/user_nutrient.js";

const User = {
    login: async (id) => {
        const user = await Users.findOne({ where: { id: `${id}` }, raw: true });
        return user;
    },

    signup: async (client) => {
        
        const user = await Users.create({
            id: `${client.id}`,
            pw: `${client.pw}`,
            name: `${client.name}`,
            nickname: `${client.nickname}`
        });

        const userinfo = await UserInfo.create({
            id : `${client.id}`,
            height : `${client.height}`,
            weight : `${client.weight}`,
            gender : `${client.gender}`,
            age : `${client.age}`
        })
        return { user, userinfo };
    },

    //login과 코드 같음...?
    findById: async (id) => {
        const user = await Users.findOne({ where: { id: `${id}` }, raw: true });
        return user;
    },

    findByNickname : async (nickname) => {
        const user = await Users.findOne({ where : {nickname : `${nickname}`}, raw : true});
        return user;
    },

    secede : async (id) => {
        const user = await Users.destroy({ where : { id : `${id}`} });
        const userinfo = await UserInfo.destroy({ where : { id : `${id}`} });
        return { user, userinfo };
    },

    getNutrient : async (id) => {
        const nutrient = await UserNutrient.findAll({ where : { id : `${id}`}, raw : true});
        return nutrient;
    }
};

export default User;