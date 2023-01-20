import { Users } from "./models/user.js";

const User = {
    login : async (id) => {
        const user = await Users.findOne({where : {id : `${id}`}, raw : true});
        return user;
    },

    signUp : async (client) => {
        const user = await Users.create({
            id : `${client.id}`,
            pw : `${client.pw}`,
            name : `${client.name}`,
            nickname : `${client.nickname}`
        });
        return user;
    }
};

export default User;