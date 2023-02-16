import nutritional from "../services/nutritionalServices.js"
const process={ //게시판 관련 처리
    SELECT: async (req,res)=>{
        try{
            const response = await nutritional.All(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
        
    },
    RECOMMEND: async (req,res) =>{
        try{
            const response = await nutritional.recommend(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }

    }
    
};
export default process;