import express from "express";
import Userdata from "./model.js";
import cors from "cors"
import bcrypt from 'bcryptjs'
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
router.post("/login",async (req,res)=>{
    try {
        const {email,password}=req.body
        const data=await Userdata.findOne({email})
        const checkPass=bcrypt.compareSync(password,data.password)
        if (checkPass) {
            res.json("logged in Successfully");
        }
        else{
            res.json("Invalid Credentials")
        }
    } catch (error) {
        res.json("Invalid Credentials")
    }

})
export default router