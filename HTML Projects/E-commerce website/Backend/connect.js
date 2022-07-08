import mongoose from "mongoose";
import 'dotenv/config'
const db=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.482fb.mongodb.net/Customers?retryWrites=true&w=majority`
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