import mongoose from "mongoose";
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7hkdg.mongodb.net/users?retryWrites=true&w=majority`;
mongoose.connect(url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to database successfully");
}).catch((err)=>{
    console.log(err);
})
