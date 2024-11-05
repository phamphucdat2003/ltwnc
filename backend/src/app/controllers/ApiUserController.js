import userModel from "../services/userModel.js";
import bcrypt from 'bcryptjs'
class ApiUserController {
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
            // Tăng độ phức tạp cho hàm băm
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log(password);
            console.log(hashedPassword);
            
            // Tạo người dùng mới
            const result = await userModel.createNewUser(username, hashedPassword, fullname, address, sex, email, role);
            res.json(result);
        } catch (error) {
            next(error); 
        }
    }
    async updateOne (req, res, next) {
        const {id, fullname, address, sex, email} = req.body;
        try {
          const result = await userModel.updateUser( fullname, address, sex, email, id);
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
}

export default new ApiUserController();
