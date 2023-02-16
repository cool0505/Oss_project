import Dailynutrient from "../database/dailynutrient.js";
import nutritional from "../database/nutritional.js";
const process={ //영양제 추천 
    findnutritional: async (nutrient) =>{
        var dailyuser = new Array();
        const a = await nutritional.FindAll() 
        for (var i=0;i<a.length;i++){
            var b = a[i].nutritional_info.split("@")
            for (var j= 0;j<b.length;j++){
                if (b[j].indexOf(nutrient.nutrient_name)!=-1){
                    /* console.log(b[j+1],a[i].nutritional_id)
                    console.log(b[j+1]) */
                    if (nutrient.commend-process.test(b[j+1].split(" ")[0].replace(",",""),nutrient.unit) >= 0){
                        dailyuser.push([a[i].nutritional_id,nutrient.commend-process.test(b[j+1].split(" ")[0].replace(",",""),nutrient.unit),a[i].link])
                    }
                    /* return a[i].nutritional_id */
                }
            }   
        }
        return dailyuser
    },
    ftest: async (test,dailyuser) =>{ //내가먹는양 계산
        /* console.log(dailyuser[0]) */
        

        //비타민 검색 테스트 키 벨류 로 
        /* test2["비타민A"]=20
        test2["비타민B"]=10
        const abcd = ["비타민A","비타민B"]
        for (var i=0;i<abcd.length;i++){
            console.log(test2[abcd[i]])
        } */
        //문자열 포함되있는지 확인 테스트 
        /* const a = "비타민 A"
        console.log(a.replace(" ","").indexOf("비타민A")) */
        var ttest = {}
        //영양제 정보 @기준으로 짜르기 
        
        let nutritionaldata = await nutritional.FindNutritional(test.id)
        let cut = nutritionaldata[0].dataValues.nutritional_info.split("@")
        for (var j=0;j<cut.length;j++){
            for (var k =0;k<dailyuser.length;k++){
                let cutstring = cut[j].replace(" ","")
                if (cutstring.search(dailyuser[k].nutrient_name)!=-1){ //영양소로 시작하면 해당 영양소가 맞음 ex) 판토텐산(판토텐산칼슘) 같은 경우 판토텐산, 칼슘 검색시 둘다나옴
                    //console.log(dailyuser[k].nutrient_name,cut[j+1])
                    if (typeof ttest[cutstring]=="undefined"){
                        ttest[cutstring] = [cutstring.search(dailyuser[k].nutrient_name),cut[j+1].split(" ")[0].replace(",",""),dailyuser[k].nutrient_name]
                    }
                    else{
                        if(parseInt(ttest[cutstring][0]) > parseInt(cutstring.search(dailyuser[k].nutrient_name))){
                            ttest[cutstring] = [cutstring.search(dailyuser[k].nutrient_name),cut[j+1].split(" ")[0].replace(",",""),dailyuser[k].nutrient_name]
                        }
                    }
                    
                }
            }
        }
        const key = Object.keys(ttest)
        for (var i = 0;i<key.length;i++){
            let eatdate = ttest[key[i]]
            for (var j =0;j<dailyuser.length;j++){
                if (dailyuser[j].nutrient_name == eatdate[2]){
                    dailyuser[j].eating += process.test(parseFloat(eatdate[1]),dailyuser[j].unit)
                }
            }
        }
        /* for (var i = 0;i<ttest.length;i++){
            c
        } */
        /* for (var i = 0;i<dailyuser.length;i++){
            console.log(dailyuser[i].nutrient_name,dailyuser[i].eating)
        } */
        
        return dailyuser
        
    },
    test: (value,type) => {
        if (type == "g"){
            return value/1000000
        }
        else if (type == "mg"){
            return value/1000
        }
        else{
            return value
        }
    }
}
export default process