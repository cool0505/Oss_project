import express from "express";
import path from "path";
import bodyParser from "body-parser";
import Router from "./src/index.js";
const app = express();

const __dirname = path.resolve();

app.set("port",process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname));

app.use("/",Router);
app.listen(app.get("port"),()=>{
    console.log("start server");
});
