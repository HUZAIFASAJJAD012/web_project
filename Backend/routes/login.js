import express from "express";
import {postlogin} from "../controllers/authcontroller.js" 
const router = express.Router();



router.get("/",postlogin);


export default router;
