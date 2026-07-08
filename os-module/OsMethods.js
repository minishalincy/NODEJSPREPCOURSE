const os = require("os")

console.log(os.hostname());
console.log(os.totalmem());
console.log(os.userInfo());
// let uptime = os.uptime()
// console.log("Hour",uptime/3600);

const uptime = os.uptime();

const days = Math.floor(uptime / (24 * 3600));
const hours = Math.floor((uptime % (24 * 3600)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = uptime % 60;

console.log(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);

