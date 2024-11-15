import express from "express";
import dotenv from "dotenv/config";
//config
import setupStaticFiles from "./src/config/pathConfig.js";
import viewEngine from "./src/config/viewEngine.js";
import setSession from "./src/config/sessionConfig.js";
import startXampp from "./src/config/startXampp.js";

//web
import route from'./src/routes/index.js';
//library
import expressLayouts from'express-ejs-layouts'
import bodyParser from 'body-parser';
import flash from 'connect-flash';

const port = process.env.PORT || 3001


const app = express();

startXampp()
app.use(flash())
//setup đường dẫn vào public
setupStaticFiles(app); 
//dựng khung layouts cho ejs
app.use(expressLayouts)


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

viewEngine(app);

setSession(app);

route(app);

app.listen(port, () => {
    console.log("-------------------------------------------------");
    console.log("   /\\_/\\ ");
    console.log("  ( o.o )");
    console.log(` > ${port} < `);
})

