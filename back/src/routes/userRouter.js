import  express  from "express";
import ctrl from "../controllers/userCtrl.js"
const router = express.Router();


router.post("/login",ctrl.Login); //유저 로그인 라우터
router.post("/signup",ctrl.SignUp); // 회원가입 라우터 
router.post("/info",ctrl.UpdateInfo); //유저 신체정보 입력 라우터

export default router;