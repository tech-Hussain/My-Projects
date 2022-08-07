import express from "express";
import Userdata from "./model.js";
import cors from "cors"
import bcrypt from 'bcryptjs'
const router=express.Router()
router.use(express.json())
router.use(cors({credentials: true, origin: 'http://localhost:3000'}));
router.post("/register",async (req,res)=>{
    try {
        const {name,email,phone,profession,password}=req.body
        const userdata=new Userdata({
            name,email,phone,profession,password
        })
        await userdata.save()
        return res.json("registered sucessfully");
    } catch (error) {
        console.log(error);
    }

})
router.post("/login",async (req,res)=>{
    try {
        const {email,password}=req.body
        const data=await Userdata.findOne({email})
        if (data) {
            const checkPass=bcrypt.compareSync(password,data.password)
            if (checkPass) {
                const token=await data.generateToken()
                res.cookie("jwtoken",token)
                return res.json("logged in Successfully");
            }
            else{
                return res.json("Invalid Credentials")
            }
        }
        else{
            return res.json("Invalid Credentials")
        }      
    } catch (error) {
        console.log(error);
        return res.json("Server Error")
    }

})
export default router