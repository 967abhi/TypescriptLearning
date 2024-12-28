import { Request,Response } from "express"
import userModel, { IUser } from "../models/user.model";
export const checkinguser=async(req:Request,res:Response)=>{
    try{
        res.status(200).send({message:"Found successfully api in typescript"})


    }catch(err){
        // console.log("error found",err);
        res.status(400).send({message:"error found",err});
    }

}
export const registerController=async(req:Request,res:Response)=>{
    try{
        const {name,email,message}=req.body

        if(!name||!email||!message){
            res.status(400).send({message:"All field required"});
        }
        const existinguser=await userModel.findOne({email});
        if(existinguser){
            res.status(400).send({message:"email id already exist"});
        }
        const newUser:IUser=new userModel({
            name,
            email,
            message
        });
        const result=await newUser.save();
        res.status(200).send({message:"All data saved successfully",result})

    }catch(err){
        res.status(500).send({message:"Data not saved successfully"});
    }
}