const fs = require("fs")

fs.copyFile("Copy_data.txt","New_Data.txt", (err)=>{
    if(err){
        console.log(err.message);
        
    }

    console.log("File copied success");
    
})