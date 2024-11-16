import {userModel} from "../services/index.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserApi {
    async getAll(req, res, next) {
        try {
            const users = await userModel.getAllUser();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getOneById(req, res, next) {
        try {
            const data = await userModel.getUserById(req.params.id);
            res.json(data);
        } catch (error) {
            next(error); 
        }
    }

    async createOne(req, res, next) {
        const { username, password, fullname, address, sex, email, role = 1 } = req.body;
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const result = await userModel.createNewUser(username, hashedPassword, fullname, address, sex, email, role);
            res.json(result);
        } catch (error) {
            next(error); 
        }
    }

    async updateOne (req, res, next) {
        const {id, fullname, address, sex, email} = req.body;
        try {
          const result = await userModel.updateUser(fullname, address, sex, email, id);
          res.json(result);
        } catch (error) {
            next(error); 
        }
    }

    async deleteOne (req, res, next) {
        const id = req.body.id;
        try {
            const result = await userModel.deleteUser(id);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    // Thêm phương thức đăng nhập (login)
    async login(req, res, next) {
        const { username, password } = req.body;
        const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey';

        try {
            // Tìm người dùng theo tên đăng nhập
            const user = await userModel.getUserByUsername(username);
            if (!user) {
                return res.status(401).json({ message: 'Tên đăng nhập không tồn tại' });
            }

            // So sánh mật khẩu
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Mật khẩu không chính xác' });
            }

            // Tạo JWT
            const accessToken = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
            res.cookie('token', accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 60 * 60 * 1000
            });

            // Trả về kết quả
            res.status(200).json({ message: 'Success', accessToken: accessToken });
        } catch (error) {
            next(error);
        }
    }
    async logout(req, res, next) {
        try {
            // Xóa token khỏi cookie
            res.clearCookie('token', {
                httpOnly: true,          
                secure: false, 
                sameSite: 'strict',    
                maxAge: 0,
            });
    
            // Trả về phản hồi thành công
            res.status(200).json({ message: 'Đăng xuất thành công' });
        } catch (error) {
            next(error);  // Xử lý lỗi nếu có
        }
    }
    
}

export default new UserApi();
