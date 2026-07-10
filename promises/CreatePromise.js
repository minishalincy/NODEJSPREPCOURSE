function login(username){
    return new Promise((resolve,reject)=>{
        console.log("Logging in");
        
        setTimeout(()=>{
            if(username === "Mini"){
                resolve(`Welcome, ${username}`)
            }else{
                reject("User not Found")
            }
        },5000)
    })
}

// login("mini")
// .then(x=>console.log(x))
// .catch(err=>console.log(err))

async function AsyncAwait(){
    try{
        const a = await login("Mini")
        console.log(a);
        
    }catch(error){
       console.log(error);
       
    }
}

AsyncAwait()

//syntax
// async function functionName() {
//     try {
//         const result = await promiseFunction();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

//function call()