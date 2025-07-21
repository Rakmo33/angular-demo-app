//////////////////////////////////////////////
var a = 1;

function foo() {
    console.log(a); //prints undefined (due to hoisting of var inside foo)
    var a = 2;
    console.log(a); //prints 2
}
foo();

console.log(a); //prints 1 (inner var does not overwrite outer var)
{ var a = 4;}
console.log(a); //prints 4 (same scope var overwrites outer var)

///////////////////////////////////////////////////
 
// Example of closure and hoisting
function bar() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }

    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
bar();