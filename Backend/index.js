


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./connection.js";
import mongoose from "mongoose";
const app = express();

import dotenv from 'dotenv';
dotenv.config();
//connection 
const apiKey = "mongodb+srv://HEATONBOB:12345@heatonbob.apqk9we.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose.connect(apiKey, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the database."))
.catch(err => console.log("Not connected..."));

app.use(cors());
app.use(bodyParser.json( { extended: true } ));

app.use(bodyParser.urlencoded ( { extended: true } ));


app.get('/',(req,res)=> res.json({msg:"helloasdasd"}));


app.listen(2000);
console.log("Listening...");




