import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import summarizeRoutes from "../routes/summarizeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is live");
});

app.use("/api/summarize", summarizeRoutes);

export default app;
