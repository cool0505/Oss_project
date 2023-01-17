import Board from "../database/board.js";
class board{
    constructor(body){
        this.body = body;
    }
    async createboard(){
        try{
            const response = await Board.CreateBoard(this.body);
            if (response){
                return {success : true, msg : "게시판 생성 성공"};
            }
        }catch(err){
            console.log(err)
            return {success : false, msg : "게시판 생성 실패"};
        }
    }
}
export default board;