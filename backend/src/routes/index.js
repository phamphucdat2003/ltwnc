import homeRouter from'./home.js';
import aboutRouter from'./about.js';
import contactRouter from'./contact.js';

function route(app) {
    app.use('/',homeRouter);
    app.use('/about',aboutRouter);
    app.use('/contact',contactRouter);
}

export default route;