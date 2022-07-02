import express from 'express'
import Student from '../API_JS/model.js'
const router = new express.Router()
router.use(express.json())
router.post("/students",async(req,res)=>{
    try {
        const data=new Student(req.body)
        console.log(req.body);
        const dataInsert=await data.save()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})
router.get("/students",async(req,res)=>{
    try {
        const data=await Student.find()
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})
router.get("/students/:rollNo",async(req,res)=>{
    try {
        const rollNo=req.params.rollNo
        const data=await Student.findOne({rollNo})
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})
router.patch("/students/:rollNo",async(req,res)=>{
    try {
        const rollNo=req.params.rollNo
        const data=await Student.findOneAndUpdate({rollNo},req.body,{new:true})
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/students/:rollNo",async(req,res)=>{
    try {
        const rollNo=req.params.rollNo
        const data=await Student.findOneAndDelete({rollNo})
        console.log(data);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})


export default router
