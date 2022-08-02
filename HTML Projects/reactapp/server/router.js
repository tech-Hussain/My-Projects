import express from "express";
import Userdata from "./model.js";
const router=express.Router()
router.use(express.json())

router.post("/register",async (req,res)=>{
    try {
        const {username,email,mobile,profession,password}=req.body
        const userdata=new Userdata({
            username,email,mobile,profession,password
        })
        await userdata.save()
        res.send("registered sucessfully");
    } catch (error) {
        console.log(error);
    }

})
export default router