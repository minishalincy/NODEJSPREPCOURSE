const fs = require("fs")

const readStream = fs.createReadStream("Data.txt")
const writeStream = fs.createWriteStream("DowloadedFile.txt")

readStream.on("data",(chuncks)=>{
    console.log(chuncks.length);
})

readStream.pipe(writeStream)

writeStream.on("finish",(chuncks)=>{
    console.log("Download Completed");
    
})

console.log("Downloading started");
