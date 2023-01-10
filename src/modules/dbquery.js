import db from "../config/db.js"
class dbquery{
    static login(id){
        return new Promise((resolve,rejects)=>{
            db.query("SELECT * FROM users WHERE id = ?",[id],(error,result,fileds)=>{
                if(error) rejects(error);
                resolve(result[0]);
            });
        });
    }
    static SignUp(client){
        return new Promise((resolve,rejects)=>{
            db.query("INSERT INTO users VALUES(?,?)",[client.id,client.password],(err,data)=>{
                if (err) rejects(err);
                resolve({success:true});
            });
        });
    }
    
}

export default dbquery;