import Nutritional from "../database/Nutritional.js";

const nutritionalService = {

    getNutritional : async (offset) => {
        const nutritional = await Nutritional.getNutritional(offset);
        if(!nutritional) return { sc : 400 };
        return {
            sc : 200,
            nutritional
        };
    },

    getProduct : async (nutritional_id) => {
        const product = await Nutritional.getProduct(nutritional_id);
        if(!product) return { sc : 400 };
        return {
            sc : 200,
            product
        };
    }
}

export default nutritionalService;