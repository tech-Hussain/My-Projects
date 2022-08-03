import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
userDataSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hashSync(this.password,10)
    }
    next()
})
const Userdata=new mongoose.model("Userdata",userDataSchema)
export default Userdata