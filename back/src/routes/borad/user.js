import {communityBoard} from "../../database/dbquery.js";
class user{
    constructor(body){
        this.body = body;
    }
    async InsertBoard(){
        const client = this.body;
        try{
            const response = await communityBoard(client);
            if (response.success){
                return {success : true, msg : "게시판 생성 완료"};
            }
            else{
                return {success : true, msg : "게시판 생성 실패"};
            }
        }catch(err){
            return {success : false, msg : "게시판 생성 오류"};
        }
    }

}
export default user;