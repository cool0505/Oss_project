import User from '../database/User.js';
import bcrypt from "bcrypt";

const userService = {

    login : async (body) => {

        try {
            const response = await User.login(body.id);

            if(response) {
                if(bcrypt.compareSync(body.pw, response.pw)) {
                    return { success : true, msg : "로그인 성공"};
                } else { 
                    return { success : false, msg : "비밀번호 오류"};
                }
            }

            return { success : false, msg : "존재하지 않는 아이디"};

        } catch (err) {
            console.log(err);
            return  { success : false, msg : err };
        }
    },

    signUp : async (body) => {

        const bcryptPw = bcrypt.hashSync(body.pw, 10);
        body.pw = bcryptPw;
        
        try {
            const response = await User.signUp(body);

            if(response) {
                return { success : true, msg : "회원가입 성공" };
            }
            
            return { success : false, msg : "이미 존재하는 아이디" };
        } catch (err) {
            return { success : false, msg : err };
        }
    }
}

export default userService;