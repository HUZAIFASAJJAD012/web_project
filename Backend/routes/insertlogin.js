import express from "express";
import { insertlogin } from "../controllers/insertlogin.js";
import { getlongindata } from "../controllers/insertlogin.js";
const router = express.Router();



router.post("/", insertlogin);

router.get("/", getlongindata);


export default router;
