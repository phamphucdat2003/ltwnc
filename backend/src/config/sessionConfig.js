import RedisStore from 'connect-redis'
import session from 'express-session'
import { createClient } from 'redis'

const setSession = (app) => {
    let redisClient = createClient()
    redisClient.connect()
        .catch(error => console.error(error))
        
    let redisStore = new RedisStore({
        client: redisClient,
        prefix: "myapp:",
        })
    app.use(
        session({
        store: redisStore,
        resave: false,
        saveUninitialized: false, 
        secret: 'be-meo-nho-mit-uot'
        })
    )

    app.use((req, res, next) => {
        res.locals.session = req.session;
        next();
    });
}

export default setSession
