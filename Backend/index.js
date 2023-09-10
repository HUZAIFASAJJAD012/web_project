


import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./connection.js";
import mongoose from "mongoose";
import {PORT,apiKey} from "./config.js";
const app = express();
const apiKeyAsString = String(apiKey);
import router from "./routes/signup.js";
//connection 

mongoose.set("strictQuery", true);
mongoose.connect(apiKeyAsString, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to the database."))
.catch(err => console.log("Not connected..."));

app.use(cors());
app.use(bodyParser.json( { extended: true } ));

app.use(bodyParser.urlencoded ( { extended: true } ));


app.use(router);

app.listen(PORT,{PORT});
console.log("Listening...");




