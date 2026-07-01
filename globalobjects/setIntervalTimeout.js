let id = setInterval(()=>{
    console.log("Hello love");
},1000)

setTimeout(()=>{
    clearTimeout(id)
},5000)