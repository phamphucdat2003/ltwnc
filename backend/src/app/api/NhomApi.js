import {nhomModel} from "../services/index.js";

class NhomApi {
    async getAll(req, res, next) {
        try {
            const nhoms = await nhomModel.findAll({
                raw: true, 
              });
            res.json(nhoms);
        } catch (error) {
            next(error);
        }
    }
    async createOne(req, res, next) {
        try {
            const { ten } = req.body;

            // Kiểm tra nếu thiếu thông tin "ten"
            if (!ten) {
                return res.status(400).json({ message: "Tên nhóm không được để trống!" });
            }

            // Tạo nhóm mới
            const newGroup = await nhomModel.create({ ten });

            // Trả về nhóm vừa tạo
            res.status(201).json({
                message: "Tạo nhóm thành công!",
                data: newGroup,
            });
        } catch (error) {
            next(error); // Gửi lỗi đến middleware xử lý lỗi
        }
    }
}

export default new NhomApi();