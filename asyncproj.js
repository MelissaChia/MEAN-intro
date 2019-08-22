var fs = require("fs");
console.log("Reading from the file");
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  console.log("Finish reading from file");
  console.log("Begin Appending");
  fs.appendFile("input.txt", "Thanks again", err => {
    if (err) throw err;
    console.log("Finish Appending");
    console.log("Begin Rereading");
    fs.readFile("input.txt", (err, data) => {
      if (err) throw err;
      console.log(data.toString());
      console.log("Finish Rereading");
    });
  });
});
