import getALLUser from "../../services/userModel.js";

class HomeController {
    //[GET] /home
    async index(req, res) {
        let userList =  await getALLUser();
        res.render('home',{data:{title:"List User",page: "listUser",rows:userList}})
    }

}

export default new HomeController();
