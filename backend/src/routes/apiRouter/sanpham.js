import express from 'express';
// import userApi from'../../app/api/UserApi.js';
import sanphamApi from'../../app/api/SanphamApi.js';
//middleware

// import authMiddleware from "../../app/middleware/authMiddleware.js";


const router = express.Router();

router.post('/add-product', sanphamApi.createOne);
router.get('/get-list-product/:id', sanphamApi.getByGroup);
router.get('/get-detail-product/:id', sanphamApi.getById);


export default router;
