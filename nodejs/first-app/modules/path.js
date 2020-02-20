//https://nodejs.org/api/path.html
const path = require("path");
// console.log(path);

let pathObj = path.parse(__filename);
console.log(pathObj);
