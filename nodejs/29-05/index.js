const { prepareString } = require("./script");
const { showHelp } = require("./messaging");
const args = process.argv.slice(2);

args.includes("--help") ? showHelp() : prepareString(args);

/*
 in script.js you have function called prepareString. This function should take a string as a parameter, and return it with only the first letter capitalized.
Example output:
'europe' => 'Europe'
'BERLIN' => 'Berlin'
'aSIa' => 'Asia'
*/
