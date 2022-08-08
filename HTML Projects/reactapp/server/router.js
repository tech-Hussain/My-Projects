import express from "express";
import Userdata from "./model.js";
import cors from "cors"
import bcrypt from 'bcryptjs'
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
const router=express.Router()
router.use(express.json())
router.use(cors({credentials: true, origin: 'http://localhost:3000'}));
router.use(cookieParser())
const authenticate=async(req,res,next)=>{
    try {
        const token =req.cookies.jwtoken
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY)
        const userInfo=await Userdata.findOne({_id:verifyToken._id})
        if (!userInfo) {
            throw new Error("User not found")
        }
        req.user=userInfo
        next()
    } catch (error) {
        res.status(401).json(null)
    }

}


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
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now()+2628000000)
                })
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
router.get("/about",authenticate,(req,res)=>{
    res.json(req.user)
})
export default router