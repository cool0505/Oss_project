import User from "./user.js"

const process={
    InsertBoard: async function(req,res){
        const user = new User(req.body);
        const response = await user.InsertBoard();
        return res.status(200).json(response);
    }
}
    

export default process;