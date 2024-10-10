
class AboutController {
    //[GET] /home
    index(req, res) {
        res.render("about")
    }

}

export default new AboutController();
