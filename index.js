const express=require('express');
const app=express();
const dotenv=require('dotenv');
app.use(express.json());
const connectdb=require('./db');
connectdb();
dotenv.config();
const item=require('./Router/item.js');
app.use('/api',item);
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server Running at ${port}`);
    
})
