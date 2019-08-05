// Global Variable Scope
name = "Cho Latt";
age = 40;
console.log("My name is "+name+".");
console.log("My age is "+age+".")
function sayName() {
    const age = 30;
    console.log(`Hello there my name is ${name}.`);
    console.log(this.name);
    sayAge();

    function sayAge() {
        // const age = 10;
        console.log(`My age is `+ age);
        console.log(this.age);
    }
}

sayNameAge();
console.log("\n");
sayName();

// Functional Scope
function sayNameAge() {
    const name = "Lin Latt Cho";
    const age = 13;

    console.log(name+"="+ age);
    console.log(this.name+"=", this.age);
}
