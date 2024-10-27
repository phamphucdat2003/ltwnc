import express from 'express';
import userApi from'../../app/controllers/ApiUserController.js';

const router = express.Router();


router.get('/getuser/:id', userApi.getOne);


export default router;
