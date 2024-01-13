import express from 'express';

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/users.js';

const router = express.Router();

// all routes in here starts with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);
// patch is used to update a part of the resource whereas put is used to update the whole resource

export default router;
