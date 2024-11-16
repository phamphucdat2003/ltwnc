import homeRouter from'./webRouter/home.js';
import aboutRouter from'./webRouter/about.js';
import contactRouter from'./webRouter/contact.js';
import authRouter from'./webRouter/auth.js';
import apiUserRouter from "./apiRouter/user.js";
import apiSanphamRouter from "./apiRouter/sanpham.js";
import apiNhomRouter from "./apiRouter/nhom.js";
//middleware

import authMiddleware from "../app/middleware/authMiddleware.js";




const webRoute = (app) => {
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/auth', authRouter);
    app.use('/', homeRouter);
}
const apiRoute = (app) => {
    app.use('/api/users', apiUserRouter);
    app.use('/api/groups', apiNhomRouter);
    app.use('/api/products', apiSanphamRouter);    
}

function route(app) {
    apiRoute(app);
    webRoute(app);
}
export default route;