import { Users } from "./models/user.js";

const User = {
    login: async (id) => {
        const user = await Users.findOne({ where: { id: `${id}` }, raw: true });
        return user;
    },

    signUp: async (client) => {
        const user = await Users.create({
            id: `${client.id}`,
            pw: `${client.pw}`,
            name: `${client.name}`,
            nickname: `${client.nickname}`
        });
        return user;
    },

    //login과 코드 같음...?
    findById: async (id) => {
        const user = await Users.findOne({ where: { id: `${id}` }, raw: true });
        return user;
    },

    withdrawal : async (id) => {
        const user = await Users.destroy({ where : { id : `${id}`} });
        return user;
    }
};

export default User;