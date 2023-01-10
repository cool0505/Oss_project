import User from "../modules/user.js"
const process={
    login: async function(req,res){
        const user = new User(req.body);
        const response = await user.login()
        return res.json(response);
    },
    SignUp: async function(req,res){
        const user = new User(req.body);
        const response = await user.SignUp();
        return res.json(response);
    }
}
    

export default process;
