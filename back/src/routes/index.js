import  express  from "express";
import ctrl from "../controllers/userCtrl.js"
import ctrl2 from "../controllers/boardCtrl.js"
const router = express.Router();


router.post("/login",ctrl.login);
router.post("/SignUp",ctrl.SignUp);
router.post("/user",ctrl.UpdateUserInfo);
router.post("/community",ctrl2.CreateBoard);

export default router;