//explain regex methods like test, match, exec, replace, search, split
let regex = /(\d+)(\w+)/g;
let str = "123abc456 789hello";

console.log(str.match(regex));
// output: [ '123abc456', '123', 'abc456', index: 0, input: '123abc456 789hello', groups: undefined ]

console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
