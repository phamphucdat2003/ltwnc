import express from 'express';
import AuthController from'../../app/controllers/AuthController.js';

const router = express.Router();

router.get('/login', AuthController.viewLogin);
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

export default router;
