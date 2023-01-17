import Board from "../services/boardServices.js"
const process={
    CreateBoard: async function(req,res){
        const board = new Board(req.body);
        const response = await board.createboard();
        res.json(response);
    }
}
export default process;