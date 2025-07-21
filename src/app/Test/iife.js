//iife with different applications
// 1. Immediately Invoked Function Expression (IIFE) to create a private scope
(function() {
    var privateVariable = "Hello, I am private!";
    function privateFunction() {
        console.log(privateVariable);
    }
    privateFunction(); // This will log "Hello, I am private!"
})();
// 2. IIFE to avoid polluting the global scope  
(function() {
    var localVariable = "I am local to this IIFE!";
    console.log(localVariable); // This will log "I am local to this IIFE!"
})();
// 3. IIFE to execute code immediately
(function() {
    console.log("This code runs immediately!");
})();
// 4. IIFE to create a module pattern
(function() {
    var module = {
        name: "MyModule",
        version: "1.0",
        greet: function() {
            console.log("Hello from " + this.name + " version " + this.version);
        }
    };
    module.greet(); // This will log "Hello from MyModule version 1.0"
})();
// 5. IIFE to encapsulate logic and avoid variable conflicts
(function() {
    var uniqueVariable = "This is unique to this IIFE!";
    console.log(uniqueVariable); // This will log "This is unique to this IIFE!"
})();
// 6. IIFE to create a closure
(function() {
    var counter = 0;
    return function() {
        counter++;
        console.log("Counter: " + counter);
    };
})()(); // This will log "Counter: 1" and can be called multiple times to increment the counter
// 7. IIFE to initialize a library or framework
(function() {
    var library = {
        init: function() {
            console.log("Library initialized!");
        },
        version: "1.0"
    };
    library.init(); // This will log "Library initialized!"
})();
// 8. IIFE to create a self-contained environment
(function() {
    var selfContainedVariable = "I am self-contained!";
    function selfContainedFunction() {
        console.log(selfContainedVariable);
    }
    selfContainedFunction(); // This will log "I am self-contained!"
})();
// 9. IIFE to execute asynchronous code
(function() {
    setTimeout(function() {
        console.log("This runs after 2 seconds!");
    }, 2000);
})();
// 10. IIFE to create a namespace
(function(namespace) {
    namespace.myFunction = function() {
        console.log("This is a function in the namespace!");
    };
})((window.myNamespace = window.myNamespace || {})); // This will create or use an existing namespace
// 11. IIFE with promises
(function() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 1 second!");
        }, 1000);
    }).then(result => {
        console.log(result); // This will log "Promise resolved after 1 second!"
    });
})();
// 12. IIFE to handle errors
(function() {
    try {
        throw new Error("This is an error!");
    } catch (error) {
        console.error("Caught an error:", error.message); // This will log "Caught an error: This is an error!"
    }
})();
