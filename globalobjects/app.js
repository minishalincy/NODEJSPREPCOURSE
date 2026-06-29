require("dotenv").config()

console.log(process.env.USER_NAME);

if(process.platform === "win32"){
    console.log("Application Running on Windows");
    
}else{
    console.log("Application is on different server");
    
}