import dbquery from "./dbquery.js";
class user{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body
        try{
            const response = await dbquery.login(client.id);
            if (response){
                if (response.password === client.pword){
                    return {success : true, msg : "로그인 성공"};
                }
                else{
                    return {success : false, msg : "비밀번호 틀림"};
                } 
            }
            return {success : false, msg : "존재 하지 않는 아이디"};
            
        }catch(err){
            return {succness : false, msg : err}
        }
        
    }
    async SignUp(){
        const client = this.body
        try{
            const response = await dbquery.SignUp(client)
            if (response.success){
                return {success : true, msg : "회원가입 성공"}
            }
            return {success : false, msg : "회원가입 실패"};
        }catch(err){
            return {success : false, msg : "이미 존재하는 아이디 입니다"};
        }
        

    }
}
export default user;