import mongoose from "mongoose";
const db="mongodb+srv://tech-Hussain:8979%4vW%23VeS%23qDf@cluster0.bgrkw.mongodb.net/Customers?retryWrites=true&w=majority"
console.log(db);
mongoose.connect(db,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
}
)
.then((data)=>{
    console.log("successfully connected to database");
})
.catch((error)=>{
    console.log(error);
})