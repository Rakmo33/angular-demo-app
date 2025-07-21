// // block scope
// {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }

// console.log(a); // prints 1 (var is function scoped)
// console.log(b); // ReferenceError: b is not defined (let is block scoped)
// console.log(c); // ReferenceError: c is not defined (const is block scoped)

// Example of scoping with var, let, and const
var x = 10; // global scope
function outerFunction() {
    var x = 20; // function scope
    console.log("Outer x:", x); // prints 20

    if(true) {
        var x = 30; // function scope
        console.log("Inner x:", x); // prints 30
    }
    
    innerFunction();
    console.log("Outer x:", x); // prints 20
}
outerFunction();
console.log("Global x:", x); // prints 10