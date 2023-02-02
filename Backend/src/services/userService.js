import User from '../database/User.js';
import jwt_utils from '../utils/jwt.js';
import redisClient from '../utils/redis.js';
import bcrypt from "bcrypt";

const userService = {

    login: async (body) => {

        const response = await User.login(body.id);

        if (response) {
            if (bcrypt.compareSync(body.pw, response.pw)) {
                //console.log(response);
                const accessToken = jwt_utils.accessToken(response);
                const refreshToken = jwt_utils.refreshToken();
                redisClient.SETEX(response.id, 3600, refreshToken);

                const { id, name, nickname } = response;
                //const user = { id, name, nickname };

                //const nutrient = await User.getNutrient(body.id);

                return {
                    sc : 200,
                    id,
                    name,
                    nickname,
                    accessToken,
                    refreshToken,
                    //nutrient
                };
            }  else {
                return { sc : 400 };
            };
        } else return { sc : 400 };
    },

    signup: async (body) => {

        const bcryptPw = bcrypt.hashSync(body.pw, 10);
        body.pw = bcryptPw;

        //id, nickname 중복 값 처리
        const findId = await User.findById(body.id);
        const findNickname = await User.findByNickname(body.nickname);

        if(findId != null || findNickname != null) {
            return { sc : 400 };
        }

        const response = await User.signup(body);
    
        if (response) {
            return {
                sc : 200,
                response
            };
        }
    },

    check : async (id) => {
        const user = await User.findById(id);

        //입력값이 DB랑 동일하거나 입력값이 없는 경우
        if(user || id === undefined) {
            return { sc : 400 };
        }
        return { sc : 200 };
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

    secede : async (id) => {

        const user = await User.findById(id);
        if(!user) {
            return { msg : "unknown account..!" };
        }

        redisClient.del(id);
        
        await User.secede(user.id);

        return { sc : 200 };
    },

    getNutrient : async (id) => {
        const nutrient = await User.getNutrient(id);

        return {
            sc : 200, 
            nutrient 
        };
    }

}

export default userService;