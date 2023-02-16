import nutritional from "../database/nutritional.js";
import test from "../utils/dailynutritional.js"
import Dailynutrient from "../database/dailynutrient.js";
import user from "../database/user.js"
const dailynutrient = {
    All: async(client)=>{
        const a = await Dailynutrient.FindUser(client.age,client.gender);
        console.log(a[0].dataValues)
        var dailyuser = new Array(); // 나이, 성별 에 해당하는 하루 영양소 기준치 정보
        for (var i = 0; i<a.length;i++){
            var jsonobj = new Object();
            jsonobj.nutrient_name = a[i].dataValues.nutrient_name;
            jsonobj.eating = 0
            jsonobj.commend = a[i].dataValues.commend;
            jsonobj.max = a[i].dataValues.max;
            jsonobj.unit = a[i].dataValues.unit;
            jsonobj = JSON.stringify(jsonobj);
            dailyuser.push(JSON.parse(jsonobj));
        }
        /* console.log(client["gender"]) */
        /* for (var i = 0; i<client.nutritional.length;i++){ //유저가 먹는 영양제 이름 
            test.test(client.nutritional[i].id)
        } */
        for(var i = 0;i<client.nutritional.length;i++){
            var tttt = await test.ftest(client.nutritional[i],dailyuser)
        }
        
        
        /* for (var i = 0; i<a.length;i++){ //내가 하루 먹는양 계산
            console.log(dailyuser[i].nutrient_name,dailyuser[i].eating)
        } */
        
        //내가 먹는양 처리용 
        /* const d ={}
        d.day = tttt */
        return tttt

    },
    recommend: async (client) =>{
        for(var i = 0; i<client.length;i++){
            /* client[i].nu = await test.findnutritional(client[i]) */
            var abcde = await test.findnutritional(client[i])
            abcde.sort((a,b) => a[1]-b[1])
            client[i].nu1 = abcde[0][0]
            client[i].nu2 = abcde[1][0]
            client[i].nu3 = abcde[2][0]
            client[i].nu4 = abcde[3][0]
            client[i].nu5 = abcde[4][0]

            client[i].link1 = abcde[0][2]
            client[i].link2 = abcde[1][2]
            client[i].link3 = abcde[2][2]
            client[i].link4 = abcde[3][2]
            client[i].link5 = abcde[4][2]
            
           /*  console.log(abcde) */
        }
        return client
    }
}
export default dailynutrient