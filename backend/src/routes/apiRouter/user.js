import express from 'express';
import userApi from'../../app/api/UserApi.js';
//middleware

import authMiddleware from "../../app/middleware/authMiddleware.js";


const router = express.Router();

router.post('/login', userApi.login);
router.post('/logout', authMiddleware.checkUser, userApi.logout);


router.get('/getuserbyid/:id', userApi.getOneById);
router.post('/createuser', userApi.createOne);
router.put('/updateuser', authMiddleware.checkUser, userApi.updateOne);
router.delete('/deleteuser', authMiddleware.checkUser, userApi.deleteOne);


export default router;
