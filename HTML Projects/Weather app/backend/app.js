import express, { query } from "express";
import fetch from "node-fetch";
import path from 'path';
const port=process.env.PORT || 3000
const staticPath=path.join(process.cwd(),'../frontend/static')
const dynamicPath=path.join(process.cwd(),'../frontend/dynamic')
const app=express()
var response;
app.set('views',dynamicPath)
app.set('view engine','hbs')
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    if (req.query.s_text==="") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&units=metric&appid=3e4c955cdb10428fd983999f59f3b259`)
        .then(res => res.json())
        .then(json => response=json);
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.s_text}&units=metric&appid=3e4c955cdb10428fd983999f59f3b259`)
        .then(res => res.json())
        .then(json => response=json);
        
    }
    res.render('index',{
        // 'city':response.name,
        // // 'temp':response.main.temp,
        // 'Realtemp':response.main.feels_like,
        // 'weather':response.weather[0].main,
        // 'mintemp':response.main.temp_min,
        // 'maxtemp':response.main.temp_max,
        // 'pressure':response.main.pressure,
        // 'humidity':response.main.humidity,
        // 'speed':((response.wind.speed) * 3.6).toPrecision(3),
        // 'visibility':response.visibility,
        // 'cover':response.clouds.all
    })
})
app.listen(3000,()=>{
    console.log(`port listening on ${port}`);
})