import mongoose from "mongoose";
const db="mongodb+srv://techHussain:hussainarif@cluster0.482fb.mongodb.net/Customers?retryWrites=true&w=majority"
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