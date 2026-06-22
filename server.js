require('dotenv').config();
const connectDB=require('./config/db');
const express=require('express');
const app=express();
const port=5000;

connectDB();

app.use(express.json());

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});