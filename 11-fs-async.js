const { readFile, writeFile } = require("fs");

console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here the new result is : ${first}\nThe content of second.txt: ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting with this task')
