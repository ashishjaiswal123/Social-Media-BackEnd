import Express from "express";
import { getUser, updateUser } from "../Controllers/UserController.js";

const router = Express.Router()

router.get('/:id', getUser)
router.put('/:id', updateUser)

export default router