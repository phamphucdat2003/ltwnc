import userModel from "../services/userModel.js";
import bcrypt from 'bcryptjs'

class AuthController {
    viewLogin(req,res,next){
        res.render('login', {
            data: {Title: 'login'},
            messages: req.flash('error')
        })
    }

    async login(req,res, next){
        const { username, password } = req.body
        try {
          const user = await userModel.getUserByUsername(username)
          
          if (!user) {
            req.flash('error', 'Tài khoản không tồn tại')
            res.status(401).redirect('/auth/login')
            return
          }
          // console.log("Password nhập vào:", password);
          // console.log("Password trong database:", user.password);
          
          const isMatch = await bcrypt.compare(password, user.password)
          // console.log(isMatch);
          
          if (!isMatch) {
            req.flash('error', 'Mật khẩu không chính xác')
            res.status(401).redirect('/auth/login')
            return
          }
      
          req.session.user = {
            id: user.id,
            username: user.username,
            fullname: user.fullname,
            role: user.role,
            address: user.address,
            sex: user.sex
          }
          // console.log("thanhcong");
          
          return res.redirect('/')
        } catch (err) {
          console.error(err)
          return res.status(500).json({ message: 'Server error' })
        }
    }

    async logout(req,res,next) {
        req.session.destroy((err) => {
            if (err) {
                console.error("Lỗi khi hủy session:", err);
                return res.status(500).json({ message: 'Server error' });
            }
            res.redirect('/');
        });
    }
}

export default new AuthController();
