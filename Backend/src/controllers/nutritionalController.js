import nutritionalService from "../services/nutritionalService.js";

const nutritionalController = {

    getNutritional: async (req, res) => {
        const nutritional = await nutritionalService.getNutritional(req.query.offset);
        return res.json(nutritional);
    },

    getProduct: async (req, res) => {
        console.log(req.params);
        const product = await nutritionalService.getProduct(req.params.nutritional_id);
        return res.json(product);
    }

}

export default nutritionalController;