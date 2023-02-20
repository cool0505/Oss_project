import { Nutritionals } from "./models/nutritional.js";

const Nutritional = { 

    getNutritional : async (offset) => {
        const nutritional = Nutritionals.findAll({ offset : (offset - 1) * 10, limit : 10 });
        return nutritional;
    },

    getProduct : async (nutritional_id) => {
        const product = Nutritionals.findOne({ where : {nutritional_id : nutritional_id }, raw : true});
        return product;
    }
}

export default Nutritional;