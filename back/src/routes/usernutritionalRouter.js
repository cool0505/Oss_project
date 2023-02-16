import  express  from "express";
import ctrl from "../controllers/usernutritionalCtrl.js"
const router = express.Router();

router.post("/",ctrl.List); //유저 게시판생성 라우터
router.post("/insert",ctrl.Insert);
router.post("/update",ctrl.Change);
router.post("/delete",ctrl.Delete);
export default router;