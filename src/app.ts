// import express from
// const express =require('express')
import express, { NextFunction }  from "express";
import todoRoutes from "./routes/todo"
import {json} from "body-parser";

const app=express();
app.use(json());
app.use('/',todoRoutes);
app.use((err:Error,req:express.Request,res:express.Response,next:NextFunction)=>{
    res.status(500).json({message:"Error found",err})
})
app.listen(3000);