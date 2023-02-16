import { UserNutritionals } from "./models/usernutritional.js";

const Nutritional ={
    FindAll: async (id) => {
        const res = await UserNutritionals.findAll({where:{uid:`${id}`},raw:true});
        return res;
    },
    AddNutritional: async (client) => {
        const res = await UserNutritionals.create(client);
        return res;
    },
    UpdateNutritional: async (client) => {

    },
    DeleteNutritional: async (client) => {
        const res = await UserNutritionals.destroy({where:{nname:`${client.name}`, uid:`${client.id}`}});
        return res;
    }

}

export default Nutritional