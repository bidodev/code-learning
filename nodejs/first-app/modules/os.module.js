const os = require("os");
//console.log(os);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const byteToMegabyte = value => value / 1e6;

//Template String
const userMsg = `Your computer has a total of ${byteToMegabyte(
  totalMemory
).toFixed()} MB of Memory and in the moment you have ${byteToMegabyte(
  freeMemory
).toFixed()} MB free!`;
console.log(userMsg);
