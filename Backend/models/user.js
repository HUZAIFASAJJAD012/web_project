import mongoose from "mongoose";


const login = mongoose.Schema({
Email:String,
    password: String
    

    



});

const logindata = mongoose.model('user',login);
export default logindata;