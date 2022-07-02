import express from 'express';
import '../API_JS/connection.js'
import router from'../API_JS/router.js'
const app=express()
app.use(router)
const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Connected to ${port}`);
})