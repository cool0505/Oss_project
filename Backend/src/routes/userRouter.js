import  express  from "express";
import { check } from "express-validator";
import { validatorErrorChecker } from "../middlewares/validator.js";
import { userController } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

//Main
router.post(
    "/dashboard/app",
    verifyToken,
    userController.getNutrient
);

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

//ID 중복 검사
router.post(
    "/signup/check",
    userController.check
);

//회원가입
router.post(
    "/signup", 
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
    "/secede", verifyToken, userController.secede
);

export default router;