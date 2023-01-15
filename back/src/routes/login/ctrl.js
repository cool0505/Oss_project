import User from "./user.js"
const process={
    
    login: async function(req,res){
        //console.log(Object.keys(req.body).length) 바디 길이 출력
        const user = new User(req.body);
        const response = await user.login();
        return res.status(200).json(response);
        
    },

}
    

export default process;
