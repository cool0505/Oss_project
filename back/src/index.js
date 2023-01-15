import  express  from "express";
import ctrl from "./routes/login/ctrl.js";
import ctrl2 from "./routes/SignUp/ctrl.js";
import ctrl3 from "./routes/Update/ctrl.js";
import ctrl4 from "./routes/borad/ctrl.js";
const router = express.Router();


router.post("/login",ctrl.login);
router.post("/SignUp",ctrl2.SignUp);
router.post("/user",ctrl3.UpdateUserInfo);
router.post("/community",ctrl4.InsertBoard);

export default router;