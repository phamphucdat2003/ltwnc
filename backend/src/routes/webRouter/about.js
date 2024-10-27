import express from 'express';
import AboutController from'../../app/controllers/AboutController.js';

const router = express.Router();


router.get('/', AboutController.index);


export default router;
