const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const config=process.env
const port =config.PORT || 4000;
const router=require('./src/routes/router')

app.use('/v1',router)

app.listen(port,()=>{
    console.log("Listen");
})