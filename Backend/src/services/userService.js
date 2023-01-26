import User from '../database/User.js';
import jwt_utils from '../utils/jwt.js';
import redisClient from '../utils/redis.js';
import bcrypt from "bcrypt";

const userService = {

    login: async (body) => {

        const response = await User.login(body.id);

        if (response) {
            if (bcrypt.compareSync(body.pw, response.pw)) {
                const accessToken = jwt_utils.accessToken(response);
                const refreshToken = jwt_utils.refreshToken();
                redisClient.SETEX(response.id, 3600, refreshToken);

                const { id, name, nickname } = response;
                const user = { id, name, nickname };

                return { user, accessToken, refreshToken };
            }
        }
    },

    signUp: async (body) => {

        const bcryptPw = bcrypt.hashSync(body.pw, 10);
        body.pw = bcryptPw;

        const response = await User.signUp(body);

        if (response) {
            return response;
        }
    },

    logout: async (id) => {

        const getRefreshToken = await redisClient.get(id);
        if (!getRefreshToken) {
            return {
                status: "fail",
                msg: "no Token"
            };
        }

        redisClient.del(id);

        return { msg: "DELETE OK!" };
    },

    withdrawal : async (id) => {

        const user = await User.findById(id);
        if(!user) {
            return { msg : "unknown account..!" };
        }
        const removeUser = await User.withdrawal(user.id);
        return removeUser;
    }

}

export default userService;