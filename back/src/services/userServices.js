import User from "../database/user.js"
class user{
    constructor(body){
        this.body = body;
    }
    async login(){
        const client = this.body
        try{
            const user = await User.login(client.id);
            if(user){
                if(user.pw === client.pw){
                    const user2 = await User.UserInfo(client.id);
                    const {id,pw,name,nickname} = user
                    const {age,gender,height,weight,nutruents,count} = user2;
                    const info = {
                        id,
                        pw,
                        name,
                        nickname,
                        age,
                        gender,
                        height,
                        weight,
                        nutruents,
                        count
                    }
                    return {success : true, msg : "로그인 성공",info};
                }
                return {success : false, msg : "비밀번호가 일치하지 않음"};
            }
            return {success : false, msg : "아이디 또는 비밀번호가 일치하지 않음"};
        }catch(err){

        }
        
    
    }
    async SignUp(){
        const client = this.body
        try{
            const response = await User.SignUp(client)
            if (response){
                return {success : true, msg : "회원가입 성공"}
            }
            return {success : false, msg : "회원가입 실패"};
        }catch(err){
            return {success : false, msg : "이미 존재하는 아이디 입니다"};
        }
        

    }
    async UpdateUserInfo(){
        const client = this.body
        try{
            const user = await User.login(client.id);
            
            if (user){
                const response = await User.UpdateUserInfo(client)
                return {success : true, msg : "정보 수정 완료"}
            }
            else{
                return {success : false, msg : "해당하는유저가 존재하지 않습니다"};
            }
        }catch(err){
            return {success : false, msg : "해당하는유저가 존재하지 않습니다"};
        }
    }

}
export default user;