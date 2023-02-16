import Users from "../database/user.js"
const user = {

    Login: async (body) => { //입력받은 유저 ID AND PW 유효한지 확인하는 함수 호출
            const user = await Users.FindId(body.id);
            if(user && user.pw === body.pw){
                const user2 = await Users.FindUserInfo(body.id);
                const {id,pw,name,nickname} = user
                const {age,gender,height,weight} = user2;
                const info = {
                    id,
                    pw,
                    name,
                    nickname,
                    age,
                    gender,
                    height,
                    weight,
                }
                
            
                return {success : true, msg : "로그인 성공",info};             
            };
            throw err; 
    },
    SignUp: async (body) => { //입력 받은 유저 정보로 회원가입 진행
        await Users.AddUser(body);
        return {success : true, msg : "회원가입 성공"};
    },
    UpdateUserInfo: async (body) => { //입력받은 신체정보를 유저에 반영
        const user = await Users.FindId(body.id);   
        if (user){
            await Users.UpdateInfo(body);      
            return {success : true, msg : "정보 수정 완료"};
        }
        throw err;
    }

}
export default user;