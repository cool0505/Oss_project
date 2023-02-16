import Nutritional from "../services/usernutritionalsServices.js"
const process={ //게시판 관련 처리
    List: async(req,res)=>{
        try{
            console.log(req.body.id)
            const response = await Nutritional.FindAll(req.body.id);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
    },
    Insert: async (req,res)=>{
        try{
            const response = await Nutritional.InsertNutritional(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
        
    },
    Change: async (req,res)=>{
        try{
            const response = await 
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
    },
    Delete: async (req,res)=>{
        try{
            const response = await Nutritional.DeleteNutritional(req.body);
            res.status(200).json(response);
        }catch(err){
            res.status(400).json("에러");
        }
    },
    
};
export default process;