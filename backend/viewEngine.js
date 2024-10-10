
const viewEngine = (app) =>{
    app.set("view engine","ejs")
    app.set("views","./src/resources/views")
    app.set('layout', './layouts/main')
}


export default viewEngine