
// import forminsertdata from "../models/forminsert.js";


// export  const getDelete= async (req,res)=>{
//     console.log(req.params.id);
//     try {
//         await forminsertdata.findByIdAndDelete(req.params.id);
//     } catch (error) {
//         console.log(error); 
//     }
    
//     }
        
        
        

// export  const getlongindata = async (req,res)=>{
//     try {
    
//     const  reg= await forminsertdata.find();
//     res.json(reg);
    
    
    
//     } catch (error) {
    
//     console.log("not found");
    
//     }
    
    
//     }
// export const forminsert = async(req, res) => {




//     const Name=req.body.Name;
//     console.log(Name);
//     const DATABIRTH=req.body.DATABIRTH;
//     console.log(DATABIRTH);
//     const AGE=req.body.AGE;
//     console.log(AGE);
//     const ADRESS=req.body.ADRESS;
//     console.log(ADRESS);
    
//     const PhoneNumber=req.body.PhoneNumber ;
//     console.log(PhoneNumber);
//     const EMAIL=req.body.EMAIL ;
//     console.log(EMAIL);

//     const School=req.body.School ;
//     console.log(School);
    

//     const EDU=req.body.EDU ;
//     console.log(EDU);
//     const {filename}=req.file;
//     console.log(filename);
    
    
    
    
//     const regdata=new forminsertdata({
    
//         Studentname:Name,
//         DATABIRTH:DATABIRTH,     
//         Age:AGE,
//         ADRESS:ADRESS,
//         EMAIL:EMAIL,

//         School:School,
//         EDU:EDU,


//     PIC:filename,
    
    
//     });
    
//     try {
        
//     await regdata.save();


//     } catch (error) {
//     console.log("not save");
//     }










// }