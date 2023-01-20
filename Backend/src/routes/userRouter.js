import  express  from "express";
import {check} from "express-validator";
import { validatorErrorChecker } from "../middlewares/validator.js";
import { userController } from "../controllers/userController.js";

const router = express.Router();

//로그인
router.post(
    "/login", 
    [
        check("id").exists(),
        check("pw").exists()/*.isLength({min : 8, max : 12})*/,
        validatorErrorChecker
    ],
        userController.login
);
    
//회원가입
router.post(
    "/signUp", 
    [
        check("id").exists(),
        check("pw").exists().isLength({min : 8, max : 12}),
        validatorErrorChecker // 발동
    ],
    userController.signUp
);

export default router;