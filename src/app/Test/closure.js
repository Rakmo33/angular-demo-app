// let test = 1;

// function outerFunction() {
//     let outerVariable = foo();

//     function innerFunction() {
//         console.log(outerVariable++); // Accessing outerVariable from the outer function
//     }

//     return innerFunction; // Returning the inner function
// }

// function foo(){
//     test++;
//     return test;
// }

// const closureFunction = outerFunction(); // closureFunction now holds the inner function
// closureFunction(); // Calling the inner function, which accesses outerVariable
// closureFunction(); // Calling the inner function, which accesses outerVariable
// closureFunction(); // Calling the inner function, which accesses outerVariable

// for (var i = 1; i <= 3; i++) {
//   (function(i) {
//     setTimeout(() => console.log(i), i * 1000);
//   })(i);
// }


