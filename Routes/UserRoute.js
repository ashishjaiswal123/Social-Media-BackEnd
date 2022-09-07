import Express from "express";
import { getUser } from "../Controllers/UserController.js";

const router = Express.Router()

router.get('/:id', getUser)

export default router