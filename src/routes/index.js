import  express  from "express";
import ctrl from "../controllers/userctrl.js"
const router = express.Router()

router.post("/login",ctrl.login);
router.post("/SignUp",ctrl.SignUp);

export default router;