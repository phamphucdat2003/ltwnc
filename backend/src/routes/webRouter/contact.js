import express from 'express';
import ContactController from'../../app/controllers/HomeController.js';

const router = express.Router();


router.get('/', ContactController.index);

export default router;
