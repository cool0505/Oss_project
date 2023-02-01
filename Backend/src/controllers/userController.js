import userService from "../services/userService.js";

const userController = {

    login : async (req, res) => {
        try {
            const response = await userService.login(req.body);
            console.log(response);
            if(response.sc == "400") {
                return res.json(response);
            }
            res.json(response);
        } catch (err) {
            res.json(err);
        }
    },

    check : async(req, res) => {
        const response = await userService.check(req.body.id);
        res.json(response);
    },

    signUp : async (req, res) => {
        try {
            const response = await userService.signUp(req.body);
            res.json(response);
        } catch (err) {
            res.json(err);
        }
    },

    logout : async (req, res) => {
        try {
            const response = await userService.logout(req.body.id);
            res.json(response);
        } catch (err) {
            res.json(err);
        }
    },

    secede : async (req, res) => {
        try {
            const response = await userService.secede(req.body.id);
            res.json(response);
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    },

    getNutrient : async (req, res) => {
        try {
            const nutrient = await userService.getNutrient(req.body.id);
            res.json(nutrient);
        } catch (err) {
            res.json(err);
        }
    }

}

export { userController };