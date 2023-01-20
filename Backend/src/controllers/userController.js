import userService from "../services/userService.js";

const userController = {

    login : async (req, res) => {
        const response = await userService.login(req.body);
        res.json(response);
    },

    signUp : async (req, res) => {
        const response = await userService.signUp(req.body);
        res.json(response);
    }
}

export { userController };