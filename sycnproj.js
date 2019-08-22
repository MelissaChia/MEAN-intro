var fs = require("fs");
console.log("Reading from the file");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Finish reading from file");
console.log("Begin Appending");
try {
  fs.appendFileSync("input.txt", "Thank you");
  console.log("Finish appending");
} catch (err) {
  /*Handle the error*/
}
console.log("Re-reading from file");
data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Finish Re-reading");
