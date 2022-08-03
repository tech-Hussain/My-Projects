import 'dotenv/config'
import express from "express";
const app = express()
const port=process.env.PORT || 5000
import "./connection.js"
import router from "./router.js"
app.use(router)



app.listen(port,()=>{
    console.log(`connected to port no ${port} successfully`);
})