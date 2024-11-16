import {sanphamModel} from "../services/index.js";
import {nhomModel} from "../services/index.js";

class SanphamApi {
    async getAll(req, res, next) {
        try {
            const sanphams = await sanphamModel.findAll({
                include: [{
                    model: nhomModel,
                    attributes: ['ten'], // Chỉ lấy tên nhóm
                }],
                attributes: ['id', 'ten', 'gia', 'hinhanh', 'mota'], // Lấy các trường cần thiết từ bảng sản phẩm
            });
    
            res.status(200).json(sanphams); // Trả về danh sách sản phẩm kèm nhóm
        } catch (error) {
            next(error); // Gửi lỗi đến middleware xử lý
        }
    }
    
    async getById(req, res, next) {
        try {
            const { id } = req.params; // Lấy id sản phẩm từ URL
    
            // Kiểm tra id có hợp lệ không
            if (!id) {
                return res.status(400).json({ message: "Vui lòng cung cấp ID sản phẩm!" });
            }
    
            // Tìm sản phẩm theo ID
            const product = await sanphamModel.findOne({
                where: { id }, // Điều kiện tìm theo ID
                include: [{
                    model: nhomModel,
                    attributes: ['ten'], // Lấy tên nhóm liên kết
                }]
            });
            if (!product) {
                return res.status(404).json({ message: "Sản phẩm không tồn tại!" });
            }
    
            res.status(200).json(product); // Trả về thông tin sản phẩm
        } catch (error) {
            next(error); // Gửi lỗi đến middleware xử lý lỗi
        }
    }
    async getByGroup(req, res, next) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "Vui lòng cung cấp ID nhóm!" });
            }
            const group = await nhomModel.findByPk(id, {
                attributes: ['id', 'ten'], 
            });
    
            if (!group) {
                return res.status(404).json({ message: "Nhóm sản phẩm không tồn tại!" });
            }
            const products = await sanphamModel.findAll({
                raw: true,
                where: { idnhom: id },
                attributes: ['id', 'ten', 'gia', 'hinhanh', 'mota'],
            });
            res.status(200).json({
                group,
                products,
            });
        } catch (error) {
            next(error);
        }
    }
    
    async createOne(req, res, next) {
        try {
            const { ten, gia, hinhanh, mota, idnhom } = req.body;

            if (!ten || !gia) {
                return res.status(400).json({ message: "Tên và giá là bắt buộc!" });
            }

            const newProduct = await sanphamModel.create({ 
                ten, gia, hinhanh, mota, idnhom 
            });

            res.status(201).json({ message: "Thêm sản phẩm thành công!", data: newProduct });
        } catch (error) {
            next(error);
        }
    }

    // Sửa thông tin sản phẩm
    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const { ten, gia, hinhanh, mota, idnhom } = req.body;

            const product = await sanphamModel.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Không tìm thấy sản phẩm!" });
            }

            await product.update({ ten, gia, hinhanh, mota, idnhom });
            res.status(200).json({ message: "Cập nhật sản phẩm thành công!", data: product });
        } catch (error) {
            next(error);
        }
    }

    // Xóa sản phẩm
    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;

            const product = await sanphamModel.findByPk(id);
            if (!product) {
                return res.status(404).json({ message: "Không tìm thấy sản phẩm!" });
            }

            await product.destroy();
            res.status(200).json({ message: "Xóa sản phẩm thành công!" });
        } catch (error) {
            next(error);
        }
    }
    async deleteMany(req, res, next) {
        try {
            const { ids } = req.body;

            if (!Array.isArray(ids) || ids.length === 0) {
                return res.status(400).json({ message: "Danh sách ID không hợp lệ hoặc rỗng!" });
            }

            const deletedCount = await sanphamModel.destroy({
                where: {
                    id: ids,
                },
            });

            if (deletedCount === 0) {
                return res.status(404).json({ message: "Không tìm thấy sản phẩm nào để xóa!" });
            }

            res.status(200).json({ 
                message: `Xóa thành công ${deletedCount} sản phẩm!`, 
                deletedCount 
            });
        } catch (error) {
            next(error);
        }
    }

}

export default new SanphamApi();
