import homeRouter from'./webRouter/home.js';
import aboutRouter from'./webRouter/about.js';
import contactRouter from'./webRouter/contact.js';
import authRouter from'./webRouter/auth.js';
import apiRouter from "./apiRouter/user.js";

const webRoute = (app) => {
    app.use('/',homeRouter);
    app.use('/about',aboutRouter);
    app.use('/contact',contactRouter);
    app.use('/auth',authRouter);
}
const apiRoute = (app) => {
    app.use('/api',apiRouter);
}

function route(app) {
    apiRoute(app);
    webRoute(app);
}
export default route;