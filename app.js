const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternitive-way");

console.log(data);
//{ items: [ 'item 1', 'item 2' ], person: { name: 'Benjamin' } }
sayHi("Sara");
sayHi(names.john);
sayHi(names.peter);
