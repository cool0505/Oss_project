import userService from "../services/userService.js";

const userController = {

    login : async (req, res) => {
        try {
            const response = await userService.login(req.body);
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    signUp : async (req, res) => {
        try {
            const response = await userService.signUp(req.body);
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    logout : async (req, res) => {
        try {
            const response = await userService.logout(req.body.id);
            res.status(201).json(response);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    withdrawal : async (req, res) => {
        try {
            const response = await userService.withdrawal(req.body.id);
            res.status(201).json(response);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
}

export { userController };