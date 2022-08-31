import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
app.use("/posts", postRoutes);

//connect to the database
const URL = "mongodb+srv://mumbiMemo:mumbi0974@cluster0.sjuju9w.mongodb.net/?retryWrites=true&w=majority";
const PORT = 4000;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
    .catch((error)=>console.log(error));

