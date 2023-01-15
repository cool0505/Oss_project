import db from "../database/db.js";

export const login = (id) => {   
    return new Promise((resolve,rejects)=>{
        db.query("SELECT * FROM user WHERE id = ?",[id],(error,result)=>{
            if(error) rejects(error);
            resolve(result[0]);
        });
    }); 

};
export const SignUp = (client) => {   
    return new Promise((resolve,rejects)=>{
        db.query("INSERT INTO user VALUES(?,?,?,?)",[client.id,client.pw,client.name,client.nickname],(err,data)=>{
            if (err) rejects(err);
            resolve({success:true});
        });
    });
};

// 회원가입 성공 후 유저 정보 담을 테이블 생성
export const CreateUserInfo = (client) => {
    db.query(`CREATE TABLE ${client.id}info (
        id VARCHAR(20) DEFAULT '${client.id}',
        age INT DEFAULT '${client.age}',
        gender VARCHAR(5) DEFAULT '${client.gender}',
        height INT NULL,
        weight INT NULL,
        nutrients VARCHAR(20) NULL,
        count INT NULL,
        PRIMARY KEY (id));`
    , (err)=>{
        if (err) throw err
    });
};
// 유저 신체정보 먹는 영양제 테이블에 입력
export const InsertInfo = (user) => {
    return new Promise((resolve,rejects)=>{
        db.query(`UPDATE ${user.id}info SET height = ${user.height}, weight = ${user.weight}, nutrients = '${user.nutrients}', count = ${user.count}`,(err,data)=>{
            if (err) rejects(err);
            resolve({success:true});
        });
    });
};

export const communityBoard = (info) => {
    return new Promise((resolve,rejects)=>{
        db.query("INSERT INTO board VALUES(?,?,?,?,?,?)",[info.idx,info.title,info.id,info.nickname,info.date,info.text],(err,data)=>{
            if (err) rejects(err);
            resolve({success:true});
        });
    });
}

