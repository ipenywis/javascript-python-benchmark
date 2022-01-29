const fs = require("fs");

const fileContent = fs.readFileSync("../assets/smallFile.csv").toString();

console.log("Content: ", fileContent.substring(0, 500));
