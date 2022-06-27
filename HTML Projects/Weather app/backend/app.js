import express, { application, query } from "express";
import fetch from "node-fetch";
import path from 'path';
const port=process.env.PORT || 3000
const staticPath=path.join(process.cwd(),'../frontend/static')
const dynamicPath=path.join(process.cwd(),'../frontend/dynamic')
const app=express()
app.set('views',dynamicPath)
app.set('view engine','hbs')
app.use(express.static(staticPath))
app.get("/",async(req,res)=>{
    const setHeader={
        headers:{
            Accept:'application/json'
        }
    }
    if (req.query.q) {
        const Apiresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.q}&units=metric&appid=3e4c955cdb10428fd983999f59f3b259`,setHeader);
        var response = await Apiresponse.json();
    } else {
            const Apiresponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=3e4c955cdb10428fd983999f59f3b259',setHeader);
            var response = await Apiresponse.json();
    }
    try {
        res.render('index',{
            'city':response.name,
            'country':response.sys.country,
            'temp':(response.main.temp).toPrecision(3),
            'Realtemp':(response.main.feels_like).toPrecision(3),
            'weather':response.weather[0].main,
            'mintemp':(response.main.temp_min).toPrecision(3),
            'maxtemp':(response.main.temp_max).toPrecision(3),
            'pressure':response.main.pressure,
            'humidity':response.main.humidity,
            'speed':((response.wind.speed) * 3.6).toPrecision(3),
            'visibility':(response.visibility)/1000,
            'cover':response.clouds.all
        })    
    } catch (error) {
        res.render('index',{
            'city':'Country not found',
        })
    }
})
app.get("*",(req,res)=>{
    res.render("<h1></h1>")
})
app.listen(3000,()=>{
    console.log(`port listening on ${port}`);
})