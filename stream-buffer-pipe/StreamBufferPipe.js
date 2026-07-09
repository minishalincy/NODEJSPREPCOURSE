const fs = require("fs")

const readStream = fs.createReadStream("Data.txt")
const writeStream = fs.createWriteStream("DownloadedFile.txt")

readStream.on("data",(chuncks)=>{ //"data" is a built-in event
    console.log(chuncks.length);
})

readStream.pipe(writeStream)

writeStream.on("finish",(chuncks)=>{ //"finish" is a built-in event
    console.log("Download Completed");
    
})

console.log("Downloading started"); //exceutes first its synchronous
