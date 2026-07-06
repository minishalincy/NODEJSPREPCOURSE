const fs = require("fs")

fs.rename("Data.txt","New_Data.txt", (err)=>{
    if(err){
        console.log(err.message);
        
    }

    console.log("File rename success");
    
})