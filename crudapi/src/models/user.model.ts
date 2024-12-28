import mongoose,{Document,Schema} from "mongoose"

//interface for user Document
export interface IUser extends Document{
    name:string,
    email:string,
    message:string,
}
//Userschema
const UserSchema:Schema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})
//User Model
const userModel=mongoose.model<IUser>("User",UserSchema);
export default userModel;