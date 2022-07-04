import express from 'express'
import path from 'path'
import hbs from 'hbs'
const port=process.env.PORT || 3000
const app =express()
const staticPath=path.join(process.cwd(),"../frontend/static")
const dynamicPath=path.join(process.cwd(),"../frontend/dynamic/views")
const partialsPath=path.join(process.cwd(),"../frontend/dynamic/partials")
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.set("view engine","hbs")
app.set("views",dynamicPath)
app.use(express.static(staticPath)) 
hbs.registerPartials(partialsPath)  
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

