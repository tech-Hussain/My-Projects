import express from "express";
import fetch from "node-fetch";
import path from 'path';
const port=process.env.PORT || 3000
const staticPath=path.join(process.cwd(),'../frontend/static')
const dynamicPath=path.join(process.cwd(),'../frontend/dynamic')
const app=express()
app.set('views',dynamicPath)
app.set('view engine','hbs')
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.render('index')
})
app.listen(3000,()=>{
    console.log(`port listening on ${port}`);
})