var fs = require("fs");

fs.readFile('input2.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});


fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("The program has finished running");

