import {SignUp,CreateUserInfo} from "../../database/dbquery.js";
class user{
    constructor(body){
        this.body = body;
    }

    async SignUp(){
        const client = this.body
        try{
            const response = await SignUp(client)
            if (response.success){
                CreateUserInfo(client);
                return {success : true, msg : "회원가입 성공"}
            }
            return {success : false, msg : "회원가입 실패"};
        }catch(err){
            console.log(err);
            return {success : false, msg : "이미 존재하는 아이디 입니다"};
        }
        

    }
}
export default user;