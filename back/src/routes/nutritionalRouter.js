import  express  from "express";
import ctrl from "../controllers/nutritionalCtrl.js"
const router = express.Router();

router.post("/",ctrl.SELECT); 
router.post("/recommend",ctrl.RECOMMEND)
export default router;