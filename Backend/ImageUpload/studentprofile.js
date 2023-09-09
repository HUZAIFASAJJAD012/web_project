import multer from "multer";

const imgConfig=multer.diskStorage({



destination:(req,file,callBack)=>{
   console.log("I am i destination : ")
   callBack(null,"../FRONT/public/uploads")
   
},


filename:(req,file,callBack)=>{
   console.log(file);

   callBack(null,`PIC-${Date.now()}.${file.originalname}`)
}


})


const isImage=(req,file,callBack)=>{

   if (file.mimetype.startsWith("image")) {
       
       callBack(null,true)
   }else{

       callBack(new Error("Only Imge Allow here"))
   }
}

export const studentprofile=multer({

   storage:imgConfig,
   fileFilter:isImage
});