import validator  from "validator"
import mongoose from "mongoose"
import bcrypt from 'bcryptjs'
var error;
const customersSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                 error="Invalid Email format"
                 throw new Error("Invalid Email format")
            }
        },
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})
customersSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hashSync(this.password,10)
    }
    next()
})
const Customerdata=new mongoose.model("Customerdata",customersSchema)
export  {Customerdata , error}