import User from "./user.js"
const process={

    SignUp: async function(req,res){
        const user = new User(req.body);
        const response = await user.SignUp();
        return res.status(200).json(response);
    }
}
    

export default process;
