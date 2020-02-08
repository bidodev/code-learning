// (function(exports, require, module, __filename, __dirname) {
//   console.log(__filename);
//   /**
//    * logger.js
//    */
//   let url = "http://mylogger.io/log";

//   const log = msg => {
//     // Send an HTTP Request
//     console.log(msg);
//   };

//   //module.exports.log = log; //exporting the whole object
//   //module.exports.endPoint = url;

//   //we can export only a single function also.
//   module.exports = log;
// });

console.log(__filename);
console.log(__dirname);

/**
 * logger.js
 */
let url = "http://mylogger.io/log";

const log = msg => {
  // Send an HTTP Request
  console.log(msg);
};

//module.exports.log = log; //exporting the whole object
//module.exports.endPoint = url;

//we can export only a single function also.
module.exports = log;
