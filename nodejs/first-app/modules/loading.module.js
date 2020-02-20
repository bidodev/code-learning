const log = require("./creating-module");
//console.log(log); //expected output an object with a method

//logger.log("Hello"); //calling the object and acessing the method

log("Hello"); //calling only the function, because our "creating-module.js" now are only exporting the function and not the whole object.
