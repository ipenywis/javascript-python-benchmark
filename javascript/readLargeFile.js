const fs = require("fs");

const fileContent = fs.readFileSync("../assets/largeFile.csv").toString();

console.log("Content: ", fileContent.substring(0, 1000));
