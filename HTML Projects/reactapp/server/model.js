import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
const userDataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
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
    tokens:[{
        token:{
            type:String
        }
    }
    ]
})
userDataSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hashSync(this.password,10)
    }
    next()
})
userDataSchema.methods.generateToken=async function () {
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token})
        await this.save()
        return token
    } catch (error) {
        console.log(error);
    }
}
const Userdata=mongoose.model("Userdata",userDataSchema)
export default Userdata