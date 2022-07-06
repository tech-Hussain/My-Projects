import validator  from "validator"
import mongoose from "mongoose"
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
            }
        },
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})
const Customerdata=new mongoose.model("Customerdata",customersSchema)
export  {Customerdata , error}