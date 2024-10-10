import express from "express";
import dotenv from "dotenv/config";
import viewEngine from "./viewEngine.js";
import expressLayouts from'express-ejs-layouts'
import route from'./src/routes/index.js';
import path,{dirname} from "path";
import { fileURLToPath } from 'url';
import connection from "./src/config/connectDB.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(expressLayouts)
viewEngine(app);
app.use(express.static(path.join(__dirname,'./src/resources/public')))
route(app);

const port = process.env.PORT
app.listen(port, () => console.log(`dang nghe cai port ${port}`))

