import express from 'express';
// import userApi from'../../app/api/UserApi.js';
import nhomApi from'../../app/api/NhomApi.js';
//middleware

// import authMiddleware from "../../app/middleware/authMiddleware.js";


const router = express.Router();

router.get('/get-all-groups', nhomApi.getAll);
router.post('/addgroup', nhomApi.createOne);


export default router;
