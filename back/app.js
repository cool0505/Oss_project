import express from "express";
import path from "path";
import Router from "./src/routes/index.js";
import morgan from "morgan";
const app = express();

const __dirname = path.resolve();

app.set("port",process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.use("/",Router);
app.listen(app.get("port"),()=>{
    console.log("start server");
});
