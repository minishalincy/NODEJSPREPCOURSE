let temp = 45;

let id = setInterval(() => {
  console.log(temp);
  temp++;

  if (temp > 50) {
    clearInterval(id);
    console.log("System Overheat! shutting down..");
  }
}, 1000);
