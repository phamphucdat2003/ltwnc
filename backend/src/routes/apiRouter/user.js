import express from 'express';
import userApi from'../../app/controllers/ApiUserController.js';

const router = express.Router();


router.get('/getuserbyid/:id', userApi.getOneById);
router.post('/createuser', userApi.createOne);
router.put('/updateuser', userApi.updateOne);
router.delete('/deleteuser', userApi.deleteOne);


export default router;
