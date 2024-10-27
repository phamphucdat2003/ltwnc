import homeRouter from'./webRouter/home.js';
import aboutRouter from'./webRouter/about.js';
import contactRouter from'./webRouter/contact.js';
import userRouter from "./apiRouter/user.js";

function webRoute(app) {
    app.use('/',homeRouter);
    app.use('/about',aboutRouter);
    app.use('/contact',contactRouter);
}
function apiRoute(app) {
    app.use('/api',userRouter);

}

function route(app) {
    apiRoute(app);
    webRoute(app);
}
export default route;