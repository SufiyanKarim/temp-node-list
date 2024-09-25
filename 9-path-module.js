const path = require("path");

console.log(path.sep)

const pathname = path.join('/content/','subFolder','text.txt')
console.log(pathname)

const base = path.basename(pathname)

console.log(base)

const absolute = path.resolve(__dirname,'content','subFolder','text.txt')
console.log(absolute)