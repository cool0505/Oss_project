import User from "../services/userServices.js"
const process={
    
    login: async function(req,res){
        //console.log(Object.keys(req.body).length) 바디 길이 출력
        const user = new User(req.body);
        const response = await user.login();
        res.json(response);
        
    },
    SignUp: async function(req,res){
        const user = new User(req.body);
        const response = await user.SignUp();
        res.json(response);
    },
    UpdateUserInfo: async function(req,res){
        const user = new User(req.body);
        const response = await user.UpdateUserInfo();
        res.json(response);
    },

}
    

export default process;