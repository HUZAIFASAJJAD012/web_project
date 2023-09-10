import express from "express";
import authcontroller from "../controllers/authcontroller";

const router = express.Router();



router.post("/signup",authcontroller.signup);


export default router;
