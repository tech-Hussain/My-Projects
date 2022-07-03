import express from 'express'
import path from 'path'
import { Youtube } from 'ytdownloader.js'
const staticPath=path.join(process.cwd(),'../frontend/static')
const dynamicPath=path.join(process.cwd(),'../frontend/dynamic')
const port=process.env.PORT || 5050
const app=express()
app.use(express.json())
app.use(express.static(staticPath))
app.use(express.urlencoded({
    extended:true
}))
app.set("view engine","hbs")
app.set("views",dynamicPath)
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/",async(req,res)=>{
    const data=await new Youtube().ytmp3(req.body.url, false)
    console.log(data);
    var link=data.dl_link
    console.log(typeof(link));
    res.render("index",{
        link:data.dl_link
    })
})
app.listen(port,()=>{
    console.log(`listening to ${port}`);
})