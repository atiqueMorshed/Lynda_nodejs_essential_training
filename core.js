const path = require("path");
const util = require("util");
const v8 = require("v8");

// util.log( path.basename(__filename) );
// util.log(" ^ The name of the current file.");

// const dirUploads = path.join(__dirname, "www", "files", "uploads");
// console.log(dirUploads);

util.log(v8.getHeapCodeStatistics());