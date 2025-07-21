// global object ///////////////////////////////////////////
const obj ={
    userName : "Rakmo",

    normalObjMethod : function() {
        console.log("Normal Obj method:", this.userName); // refers to the obj
    },

    normalObjMethodDetached : function() {
        console.log("Normal Obj method (detached):", this.userName); // refers to the obj
    },

    arrowObjMethod : () => {
        console.log("Arrow Obj method:", this.userName); //refers to the global object, not the obj
    }
}
console.log(this.userName);
obj.normalObjMethod();
const temp = obj.normalObjMethodDetached;
temp(); // refers to the global object, not the obj as it is not called as a method of the obj
obj.arrowObjMethod();


// constructor function scope ///////////////////////////////////////////
function myConstructorFunction (){
    this.userName = "Rakmo";

    this.normalConstructorFnMethod = function() {
        console.log("Normal ConstructorFn method:", this.userName); 
        
        setTimeout(function () {
            console.log("Timeout - normal fn:", this.userName); // likely window
        }, 1000);
        
        setTimeout(() => {
            console.log("Timeout - arrow fn:", this.userName); // outer `this` (likely window)
        }, 1000);
    }

    this.arrowConstructorFnMethod = () => {
        console.log("Arrow ConstructorFn method:", this.userName);
            
        setTimeout(function () {
            console.log("Timeout - normal fn:", this.userName); // likely window
        }, 1000);
        
        setTimeout(() => {
            console.log("Timeout - arrow fn:", this.userName); // outer `this` (likely window)
        }, 1000);
 
    }
}
console.log(this.userName);
const obj2 = new myConstructorFunction();
obj2.normalConstructorFnMethod();
obj2.arrowConstructorFnMethod();

// constructor function scope ///////////////////////////////////////////
class myClass {
    constructor() {
        this.userName = "Rakmo";

        this.normalClassMethod = function () {
            console.log("Normal Class method:", this.userName);
        };


    }

            arrowClassMethod = () => {
            console.log("Arrow Class method:", this.userName);
        };
}
console.log(this.userName);
const obj3 = new myClass();
obj3.normalClassMethod();
obj3.arrowClassMethod();


// EVENT HANDLER ///////////////////////////////////////////
btn.addEventListener("click", function () {
  console.log("Event - normal fn:", this); // <button>
});

btn.addEventListener("click", () => {
  console.log("Event - arrow fn:", this); // outer `this` (likely window)
});
