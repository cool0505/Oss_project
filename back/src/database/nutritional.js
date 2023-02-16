import { Nutritionals } from "./models/nutritional.js";
const All ={
    FindAll: async () => {
        const res = await Nutritionals.findAll({raw:true});
        return res;
    },
    FindNutritional: async (nid) => {
        const res = await Nutritionals.findAll({where:{nutritional_id:`${nid}`}},{raw:true});
        return res;
    }
}

export default All