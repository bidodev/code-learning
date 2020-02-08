const fs = require("fs");
//console.log(fs);

//const files = fs.readdirSync("./");
//console.log(files);

//Nb: Always preffer to use async methods.
fs.readdir("./", (error, result) => {
  if (error) console.log(error);
  else console.log(result);
});
