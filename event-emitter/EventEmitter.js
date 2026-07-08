const EventEmitter = require("events") //class(event emitter)

const emitter = new EventEmitter()  //object (emitter)

emitter.on("login",()=>{  //register event listener (.on())
    console.log("Login Success");  
})

emitter.on("login",()=>{
    console.log("Transactions");  
})

emitter.on("logout",()=>{
    console.log("Logout");  
})

emitter.emit("login") //trigger the event (.emit())
emitter.emit("logout")