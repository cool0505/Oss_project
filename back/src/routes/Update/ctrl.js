import User from "./user.js"
const process={
    UpdateUserInfo: async function(req,res){
        const user = new User(req.body);
        const response = await user.InsertInfo();
        return res.status(200).json(response);
    }
}
    

export default process;