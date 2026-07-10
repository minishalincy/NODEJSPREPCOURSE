function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login Successfull");
      resolve();
    }, 2000);
  });
}

function getProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Profile loaded");
      resolve();
    }, 2000);
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Orders");
      resolve();
    }, 2000);
  });
}

function payment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment done");
      resolve();
    }, 5000);
  });
}

function email() {
  console.log("email sent");
}

//using async and await

async function a() {
  try {
    await login();
    await getProfile();
    await getOrders();
    await payment();
    email();
  } catch (err) {
    console.log(err);
  }
}

a();

//promise chaining

// login()
// .then(()=>{
//     return getProfile()
// })
// .then(()=>{
//     return getOrders()
// })
// .then(()=>{
//     return payment()
// })
// .then(()=>{
//     email()
// })
