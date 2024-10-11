import userModel from "../../services/userModel.js";

class HomeController {
    //[GET] /home
    async index(req, res) {
        let userList =  await userModel.getALLUser();
        res.render('home',{data:{title:"List User",page: "listUser",rows:userList}})
    }
    async getFromCreate (req,res) {
        return res.render('from/addUser', {
          data: {Title: 'fromCreate',page: 'fromCreate'}
        })
      }
    async createNewUser (req, res) {
        const {username, password, fullname, address, sex, email} = req.body
        // console.log("------------------------------------------");
        // console.log(username, password, fullname, address, sex, email);
        try {
          const newUserId =
            await userModel.createNewUser(username, password, fullname, address, sex, email)
          return res.redirect('/')
        } catch (error) {
          console.error(
            'lỗi:',
            error
          )
          return res.status(500).send('Hoi Tấn Đạt với Minh Hòa')
        }
      }

    async getFromUdate (req,res) {
      let user =  await userModel.getUser(req.params.id);
      // console.log(user);
      
      return res.render('from/updateUser', {
        data: {Title: 'fromUdate',page: 'fromUpdate',user}
      })
    }

    async updateUser (req, res) {
      const {password, fullname, address, sex, email} = req.body
      const id = req.params.id
      try {
        const User = await userModel.updateUser(password, fullname, address, sex, email, id)
        return res.redirect('/')
      } catch (error) {
        console.error(
          'lỗi:',
          error
        )
        return res.status(500).send('Hỏi Tấn Đạt với Minh Hòa')
      }
    }
    async deleteUser (req, res) {
      const id = req.params.id
      try {
        const User = await userModel.deleteUser(id)
        return res.redirect('back')
      } catch (error) {
        console.error(
          'lỗi:',
          error
        )
        return res.status(500).send('Hỏi Tấn Đạt với Minh Hòa')
      }
    }
}

export default new HomeController();
