import express from "express";
import fetch from "node-fetch";
import path from 'path';
const port=process.env.PORT || 3000
const staticPath=path.join(process.cwd(),'../frontend')
const app=express()
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.send("HI")
})
app.listen(3000,()=>{
    console.log(`port listening on ${port}`);
})