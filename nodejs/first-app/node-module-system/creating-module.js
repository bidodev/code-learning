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
