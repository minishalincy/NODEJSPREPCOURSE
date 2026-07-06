const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to Home page")
    }else if(req.url === '/about'){
    res.end("About page")    
    }else{
        res.end("Page not found")
    }
})

server.listen(5000,()=>{
    console.log(`Server running at port http://localhost:${5000}`);
})