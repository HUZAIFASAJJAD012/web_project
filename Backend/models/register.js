import mongoose from "mongoose";


const register = mongoose.Schema({
NAME:{type:String,require:true},
Username:{type:String,require:true}, 
Email:{type:String,require:true},    
password:{type:String,require:true}, 


    



}
);

const signup = mongoose.model('Signup',register,"Signups");
export default signup;