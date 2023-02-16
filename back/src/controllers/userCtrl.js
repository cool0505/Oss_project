import User from "../services/userServices.js";
const process={ //유저 관련 처리
    Login: async (req,res)=>{ //로그인
        try{
            const response = await User.Login(req.body);
            res.status(200).json(response); 
        }catch(err){
            res.status(400).json("에러");
        }        
    },
    SignUp: async (req,res)=>{ //회원가입
        try{
            const response = await User.SignUp(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
        
    },
    UpdateInfo: async (req,res)=>{ //유저 신체 정보 변경
        try{
            const response = await User.UpdateUserInfo(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
        
    },
};
    

export default process;