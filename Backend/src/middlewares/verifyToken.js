import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = async (req, res, next) => {
    try {
        req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY);
        return next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: "토큰 만료"
            });
        }
        return res.status(401).json({
            code: 401,
            message: "유효하지 않은 토큰"
        });
    }
};

export { verifyToken };