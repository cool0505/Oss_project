import jwt_utils from "../utils/jwt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const router = express.Router();

router.get('/test', jwt_utils.verifyToken(), (req, res) => {
    res.json(req.decoded);
});