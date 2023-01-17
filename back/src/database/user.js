import {Users} from "./models/user.js"
import {UserInfo} from "./models/userInfo.js"
const User={
    login: async (id) =>{
        const user = await Users.findOne({where:{id:`${id}`}, raw:true})
        return user
    },
    SignUp: async (client) =>{
        const user = await Users.create({
            id:`${client.id}`,
            pw:`${client.pw}`,
            name:`${client.name}`,
            nickname:`${client.nickname}`});
        await UserInfo.create({id:`${client.id}`});
        return user
        
    },
    UserInfo: async (id) =>{
        const user2 = await UserInfo.findOne({where:{id:`${id}`}, raw:true});
        return user2
    },
    UpdateUserInfo: async (client) =>{
        const user2 = await UserInfo.update({
            age: `${client.age}`,
            gender: `${client.gender}`,
            height: `${client.height}`,
            weight: `${client.weight}`,
            nutrients: `${client.nutrients}`,
            count: `${client.count}`  
        },{
            where:{id:`${client.id}`}
        });
        return user2
    } 
}
export default User;