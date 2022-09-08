import Express  from "express";

const router = Express.Router()

router.get('/', async(req,res) =>{
    res.send("post route")
})

export default router