import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

const jwt_utils = {
    //access token 발급
    accessToken: (id) => {
        const token = jwt.sign(id, secretKey, { expiresIn: "20m" });
        return token;
    },

    //refresh token 발급
    refreshToken: () => {
        const token = jwt.sign({}, secretKey, {
            algorithm: "HS256",
            expiresIn: "1h"
        });
        return token;
    }
}


export default jwt_utils;