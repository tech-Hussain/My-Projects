import express from "express"
import mongoose from 'mongoose'
import validator from 'validator'
const app = express()
const studentsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        minlength:11,
        maxlength:11,
    },
    dob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email not validated")
            }
        },
    },
    rollNo:{
        type:Number,
        required:true,
        unique:true,
    }
})


const Student=new mongoose.model("Student",studentsSchema)

export default Student
