import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/Customers")
.then((data)=>{
    console.log("successfully connected to database");
})
.catch((error)=>{
    console.log(error);
})