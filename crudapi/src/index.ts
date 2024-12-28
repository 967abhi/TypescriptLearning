import express,{Request,Response} from "express"
import database from "./config/db";
import userRoutes from "./routes/UserRoutes";
const app=express();
const port=3000;
app.use(express.json());
// app.use("/api",userRoutes);
app.use("/api",userRoutes);


database.then(()=>{
    console.log("Database connected")
    app.listen(port,()=>{
            console.log("Server is running on the port http://localhost:3000")
        });
})