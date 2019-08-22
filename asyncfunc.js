var fs = require("fs");

function finishTheProg(err, data) {
  console.log(data.toString());
  console.log("Finish re-reading file");
}

function rereadingFile(err) {
  if (err) console.log(err);
  console.log("Finish appending File");
  console.log("Begin re-reading File");
  fs.readFile("input.txt", finishTheProg);
}

function appendFile(err, data) {
  if (err) console.log(err);
  console.log(data.toString());
  console.log("Finish Reading From File");
  console.log("Begin Appending File");
  fs.appendFile("input.txt", "thankzz", rereadingFile);
}

console.log("Reading from file");
fs.readFile("input.txt", appendFile);
