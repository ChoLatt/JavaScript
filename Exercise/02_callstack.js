// Callstack
function sayHello() {
    console.log("Hello, my name is Cho Latt.");
}

function sayAge() {
    console.log("My age is 40");
}

function main(message) {
    console.log(message);
    sayHello();
    sayAge();    
}

// Run main function
let msg = "Run main function ..."
main(msg);
console.log("Final");