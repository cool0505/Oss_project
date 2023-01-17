import {Boards} from "./models/board.js"

const Board = {
    CreateBoard: async (board) => {
        const res = await Boards.create(board);
        return res
    }
}
export default Board;