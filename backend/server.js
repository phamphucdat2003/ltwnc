import express from "express";
import dotenv from "dotenv/config";
import date from "./date.js";
import getURL from "./getURL.js"
import viewEngine from "./viewEngine.js";
const app = express();
viewEngine(app);
const port = process.env.PORT
app.get('/', (req,res) => {
    res.send('Hello world!')
} )
app.get('/date', (req,res) => {
    res.send(date())
} )
app.get('/geturl', (req,res) => {
    res.send(getURL.getPath(req) + "<br>"+ getURL.getParamsURL(req))
} )
app.get('/ejs', (req,res) => {
    res.render("test")
} )
app.get('/home', (req,res) => {
    res.render("home")
} )
app.get('/about', (req,res) => {
    res.render("about") 
} )
app.listen(port, () => {
    console.log(`lắng nghe với cổng ${port}`)
})