import express from 'express';
import HomeController from'../../app/controllers/HomeController.js';

const router = express.Router();

router.get('/create-user',HomeController.getFromCreate)
router.post('/create-user',HomeController.createNewUser)

router.post('/udate-user/:id',HomeController.updateUser)
router.post('/delete-user/:id',HomeController.deleteUser)
router.get('/', HomeController.index);

export default router;
