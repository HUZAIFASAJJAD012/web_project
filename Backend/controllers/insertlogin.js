
// import Logindata from "../models/insertlogin.js";

//     export const getlongindata = async (req, res) => {
// //         try {
// //             const { email, password } = req.body;
// //             const userDoc = await  logindata.find({email});
// //             const passwordok= bcrypt.compareSync(password,userDoc.password);
    
// //             if (passwordok) {
                
// //                 jwt.sign({email,id:userDoc._id},Secret,{},(ERROE,token)=>{

// // res.cookie("token",token).json("ok");


// //                 })
// //             } else {
// //                 res.status(401).json({ message: "Authentication failed" });
// //             }
// //         } catch (error) {
// //             console.log("Error:", error);
// //             res.status(500).json({ message: "Server error" });
// //         }
//     }

    
    
    
    

// export const insertlogin = async(req, res) => {




//     const email=req.body.email;
//     console.log(email);
//     const password=req.body.password;
//     console.log(password);
  
    
    
    
    
//     const carddatas=new Logindata({
//         Email:email,
    
//         password:password,    
       
    
//     });
    
//     try {
        
//     await carddatas.save();
//     console.log(carddatas);
//     } catch (error) {
//     console.log("not save");
//     }










// }
