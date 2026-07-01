console.log("-------OTP VERIFICATION--------");
console.log("OTP Sent!");

let id = setTimeout(() => {
  console.log("OTP Expired");
}, 5000);

setTimeout(() => {
  clearTimeout(id);
  process.exit();
  console.log("OTP Verified");
}, 2000);
