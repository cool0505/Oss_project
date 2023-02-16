import {Users} from "./models/user.js"
import {UserInfo} from "./models/userInfo.js"
const User={
    FindId: async (id) =>{ //유저 테이블에 입력받은 ID 값이 있는지 확인 
        const res = await Users.findOne({where:{id:`${id}`}, raw:true})
        return res;
    },
    AddUser: async (client) =>{ //회원가입 ID가 기본키로 설정되어있어 중복된 ID가 들어오면 에러를 리턴한다
        const res = await Users.create(client);
        await UserInfo.create({id:`${client.id}`});
        return res;
    },
    FindUserInfo: async (id) =>{ //입력받은 유저 에 대한 신체정보를 받아온다
        const res = await UserInfo.findOne({where:{id:`${id}`}, raw:true});
        return res;
    },
    UpdateInfo: async (client) =>{ //입력 받은 유저의 신체정보를 반영한다.
        const res = await UserInfo.update({
            age: `${client.age}`,
            gender: `${client.gender}`,
            height: `${client.height}`,
            weight: `${client.weight}`, 
        },{
            where:{id:`${client.id}`}
        });
        return res;
    } 
}
export default User;