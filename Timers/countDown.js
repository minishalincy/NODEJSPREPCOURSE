let countDown = 10

let id = setInterval(()=>{
    console.log(countDown);
    countDown--

    if(countDown == 0){
        clearInterval(id)
        console.log("Happy JULY!");
        
    }
    
},1000)