function login(callback) {
  setTimeout(() => {
    console.log("login success");
    callback();
  }, 2000);
}

function getProfile(callback) {
  setTimeout(() => {
    console.log("Profile Loaded");
    callback();
  }, 2000);
}

function getOrders(callback) {
  setTimeout(() => {
    console.log("Orders loaded");
    callback();
  }, 2000);
}

function payment(callback) {
  setTimeout(() => {
    console.log("Payment Successfull");
    callback();
  }, 2000);
}

function email(callback) {
  setTimeout(() => {
    console.log("Email sent");
    callback();
  }, 4000);
}

login(() => {
  getProfile(() => {
    getOrders(() => {
      payment(() => {
        email(() => {
          console.log("Operation done");
        });
      });
    });
  });
});
