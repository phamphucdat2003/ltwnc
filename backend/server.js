import express from "express";
import dotenv from "dotenv/config";
import viewEngine from "./viewEngine.js";
import expressLayouts from'express-ejs-layouts'
import route from'./src/routes/index.js';
import path,{dirname} from "path";
import { fileURLToPath } from 'url';
import connection from "./src/config/connectDB.js";
import bodyParser from 'body-parser';
import session from 'express-session';
const port = process.env.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
viewEngine(app);
app.use(express.static(path.join(__dirname,'./src/resources/public')))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
  }))
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

route(app);







app.listen(port, () => console.log(`dang nghe cai port ${port}`))

