import homeRouter from'./webRouter/home.js';
import aboutRouter from'./webRouter/about.js';
import contactRouter from'./webRouter/contact.js';
import authRouter from'./webRouter/auth.js';
import apiRouter from "./apiRouter/user.js";
//middleware

import authMiddleware from "../app/middleware/authMiddleware.js";




const webRoute = (app) => {
    app.use('/about', aboutRouter);
    app.use('/contact', contactRouter);
    app.use('/auth', authRouter);
    app.use('/', homeRouter);
}
const apiRoute = (app) => {
    app.use('/api', apiRouter);
}

function route(app) {
    apiRoute(app);
    webRoute(app);
}
export default route;