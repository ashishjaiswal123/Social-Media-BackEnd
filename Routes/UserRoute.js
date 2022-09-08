import Express from "express";
import { deleteUser, followUser, getUser, updateUser } from "../Controllers/UserController.js";

const router = Express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)

export default router