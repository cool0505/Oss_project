import dotenv from "dotenv";
import express from "express";
import User from "../database/User.js";
import jwt_utils from "../utils/jwt.js";
import redisClient from "../utils/redis.js";

dotenv.config();

const router = express.Router();


const user = await User.findById("test");

const accessToken = jwt_utils.accessToken(user);
const refreshToken = jwt_utils.refreshToken();
redisClient.SETEX(user.id, 60, refreshToken);

router.post(
    "/refresh", () => {
        if(accessToken) {
            console.log("a");
        }
    }
    
);