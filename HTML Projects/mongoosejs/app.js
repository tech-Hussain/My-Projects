import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/techhussain")
.then((result) => {
    console.log("successfull")
}).catch((err) => {
    console.log(err);
});
const codeSchema=new mongoose.Schema({
    name:String,
    age:Number,
    status:Boolean,
    Date:{
        type:Date,
        default:new Date().toLocaleDateString()
    }
})
const Data=new mongoose.model("Data",codeSchema)
const createDocument=async()=>{
    try {
       const insertData=new Data({
        name:"Hussain",
        age:17,
        status:true
       }) 
       const insertData1=new Data({
        name:"Naveed",
        age:17,
        status:true
       }) 
       const insertData2=new Data({
        name:"Minhal",
        age:18,
        status:true
       }) 
       const insertData3=new Data({
        name:"Taimoor",
        age:19,
        status:true
       }) 
       const result=await Data.insertMany([insertData,insertData1,insertData2,insertData3])
    } catch (error) {
        console.log(error);
    }
}
// createDocument()
const getDocument=async()=>{
    const res=await Data.find().sort({age:-1})
    console.log(res);
}
getDocument()