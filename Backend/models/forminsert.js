import mongoose from "mongoose";


const regdata = mongoose.Schema({
    Studentname: String, 
    DATABIRTH: String,
    Age: String,
    ADRESS: String,
 PHONENUMBER: Number,
 EMAIL: String,
 School:String,
 EDU:String,
    PIC:{
type:String,
require:true

    },



});

const forminsertdata = mongoose.model('studentsrecord ',regdata);
export default forminsertdata;