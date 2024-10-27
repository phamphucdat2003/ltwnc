import userModel from "../../services/userModel.js";

class ApiUserController {
    async getAll(req, res) {
        try {
            const users = await userModel.getAllUsers(); // Giả sử bạn có hàm này trong userModel
            res.json(users);
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            const data = await userModel.getUser(req.params.id);
            res.json(data);
        } catch (error) {
            next(error); 
        }
    }
}

export default new ApiUserController();
