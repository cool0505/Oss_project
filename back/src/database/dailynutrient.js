import { Dailynutrient } from "./models/dailynutrient.js"
const dailynutrient ={
    FindAll: async () => {
        const res = await Dailynutrient.findAll({raw:true});
        return res;
    },
    FindUser: async (age,gender) => {
        const res = await Dailynutrient.findAll({where:{age:`${age}`,gender:`${gender}`}},{raw:true});
        return res
    }
}

export default dailynutrient