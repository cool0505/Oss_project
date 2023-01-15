import {InsertInfo} from "../../database/dbquery.js"
class user{
    constructor(body){
        this.body = body;
    }
    async InsertInfo(){
        const client = this.body
        try{
            const response = await InsertInfo(client);
            if (response.success){
                return {success : true, msg: "정보 입력 성공"};
            }
            return {success : true, msg: "정보 입력 성공"};
        }catch(err){
            return {success : false, msg : "정보 타입 오류 "};
        }
    }
}

export default user;