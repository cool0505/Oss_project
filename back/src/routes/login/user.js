import {login} from "../../database/dbquery.js";
class user{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body
        try{
            const response = await login(client.id);
            if (response){
                if (response.pw === client.pw){
                    return {success : true, msg : "로그인 성공"};
                }
                else{
                    return {success : false, msg : "아이디 또는 비밀번호가 일치하지 않음"};
                } 
            }
            return {success : false, msg : "아이디 또는 비밀번호가 일치하지 않음"};
            
        }catch(err){
            return {succness : false, msg : err}
        }
        
    }

}
export default user;