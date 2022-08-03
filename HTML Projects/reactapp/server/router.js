import express from "express";
import Userdata from "./model.js";
import cors from "cors"
const router=express.Router()
router.use(express.json())
router.use(cors())
router.post("/register",async (req,res)=>{
    try {
        const {name,email,phone,profession,password}=req.body
        const userdata=new Userdata({
            name,email,phone,profession,password
        })
        await userdata.save()
        res.json("registered sucessfully");
    } catch (error) {
        console.log(error);
    }

})
export default router