import express from "express";
import nutritionalController from "../controllers/nutritionalController.js";

const nutritionalRouter = express.Router();

//영양제 전체
nutritionalRouter.get("/information", nutritionalController.getNutritional);

//해당 영양제
nutritionalRouter.get("/:nutritional_id", nutritionalController.getProduct);

export default nutritionalRouter;