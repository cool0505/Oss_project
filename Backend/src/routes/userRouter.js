import  express  from "express";
import { check } from "express-validator";
import { validatorErrorChecker } from "../middlewares/validator.js";
import { userController } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

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
        check("pw").exists().isLength({min : 8, max : 16}),
        validatorErrorChecker // 발동
    ],
    userController.signUp
);

//로그아웃
router.delete(
    "/logout", verifyToken, userController.logout
);

//회원탈퇴
router.delete(
    "/withdrawal", verifyToken, userController.withdrawal
);

export default router;