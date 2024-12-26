import { RequestHandler } from "express"
import { Todo } from "../models/todo";
const TODOs:Todo[]=[];
export const createtodo:RequestHandler=(req,res,next)=>{
    const text=(req.body as {text:string}).text;

    const newtodo=new Todo(Math.random().toString(),text);
    TODOs.push(newtodo);
    res.status(201).json({message:"Created the todo",createtodo:newtodo})


};