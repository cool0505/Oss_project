import express from "express";
import path from "path";
import userRouter from "./src/routes/userRouter.js";
import usernutritionalRouter from "./src/routes/usernutritionalRouter.js"
import nutritionalRouter from "./src/routes/nutritionalRouter.js"
import morgan from "morgan";
const app = express();

const __dirname = path.resolve();

app.set("port",3000);
app.use(morgan('dev')); //POST 요청 에대한 정보를 출력해줌 
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));

//라우터 등록
app.use("/user",userRouter);
app.use("/usernutritional",usernutritionalRouter);
app.use("/nutritional",nutritionalRouter)

//서버 실행
app.listen(app.get("port"),()=>{
    console.log("start server");
});
