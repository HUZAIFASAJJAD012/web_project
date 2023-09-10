import express from "express";
import authcontroller from "../controllers/authcontroller";
const router = express.Router();



router.get("/",authcontroller.Login);


export default router;
