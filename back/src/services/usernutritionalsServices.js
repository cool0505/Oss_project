import Nutritionals from "../database/usernutritional.js"

const nutritional = {
    FindAll: async (id) => {
        const response = await Nutritionals.FindAll(id);
        if (response){
            return response;
        }
        throw err;

    },
    InsertNutritional: async (body) => {
        const response = await Nutritionals.AddNutritional(body);
        if (response){
            return {success:true};
        }
        throw err;
    },
    UpdateNutritional: async (body) => {

    },
    DeleteNutritional: async (body) => {
        const response = await Nutritionals.DeleteNutritional(body);
        if(response){
            return {success:true};
        };
        throw err;
    }
};
export default nutritional;