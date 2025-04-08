import { Router } from 'express';
import { getUsers, getUser, createUser, updateUser } from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;
