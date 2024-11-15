class AuthMiddleware {
    // Kiểm tra nếu người dùng đã đăng nhập
    authSuccess(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }

    // Kiểm tra vai trò của người dùng
    checkRole(role) {
        return (req, res, next) => {
            if (req.session.user && req.session.user.role <= role) {
                next();
            } else {
                return res.status(404).json({
                    message: "Bạn không có quyền sử dụng chức năng",
                  });
            }
        };
    }

    checkUser(req, res, next) {
        const id = req.session.user?.id;
        const role = req.session.user?.role;
        const idUser = req.params.id ? req.params.id : req.body.id;
      
        if (id == idUser || role === 0) {
          next();
        } else {
          return res.status(404).json({
            message: "Bạn không có quyền sử dụng chức năng",
          });
        }
      };
}

export default new AuthMiddleware();
