import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./src/routes/index.js";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname));

app.use("/user",router);

app.listen(port,()=>{
    console.log("start server");
});
