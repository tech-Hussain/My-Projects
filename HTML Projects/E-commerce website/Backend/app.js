import express from 'express'
import path from 'path'
import hbs from 'hbs'
import "../Backend/connect.js"
import {Customerdata,error} from "../Backend/model.js"
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
app.post("/signup",async(req,res)=>{
    try {
        const customerdata=new Customerdata({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const saveData=await customerdata.save()
        res.render("login")
    } catch (err) {
        if (err.code==11000) {
            res.render("signup",{
                'Eerror':"Email already exists",
                'uvalue':req.body.username,
                'pvalue':req.body.password,
                'cpvalue':req.body.password,
            })
            return;
        }
        if(error=="Invalid Email format"){
            res.render("signup",{
                Eerror:"Invalid Email format",
                'uvalue':req.body.username,
                'pvalue':req.body.password,
                'cpvalue':req.body.password,
            })
        }
    }
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

