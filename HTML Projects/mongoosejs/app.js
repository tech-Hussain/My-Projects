import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/techhussain")
.then((result) => {
    console.log("successfull")
}).catch((err) => {
    console.log(err);
});