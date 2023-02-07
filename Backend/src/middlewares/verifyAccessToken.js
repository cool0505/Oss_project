import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyAccessToken = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            return res.json({
                sc : 400,
                msg : "no Token"
            });
        } else {
            const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY);

            const userId = decoded.id;
            req.body = userId;

            console.log(req.body);
            
            next();
        }
    } catch (err) {
        res.status(401).json({ // 토큰이 일치하지 않으면
            code: 401,
            message: "유효하지 않은 토큰",
            err
        });
        next(err);
    }
};

export { verifyAccessToken };