import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/students-data").then((result) => {
    console.log("successfull connected to database");
}).catch((err) => {
    console.log(err);
});