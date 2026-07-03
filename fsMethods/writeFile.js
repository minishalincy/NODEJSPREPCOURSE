const fs = require("fs");


fs.writeFile("Data.txt","Data overwritten",(err)=>{
    if(err) throw err

    console.log("data saved");
    
})