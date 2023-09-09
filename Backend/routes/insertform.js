import express from "express";
import { imageUpload } from "../ImageUpload/imageUpload.js";
import { forminsert,getlongindata,getDelete } from "../controllers/forminsert.js";
const router = express.Router();



router.post("/",imageUpload.single("filename"), forminsert);

router.delete("/:id", getDelete);
router.get("/", getlongindata);

export default router;
