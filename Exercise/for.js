// for loop
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat heathy",
    
];

for (var i=0; i<todos.length; i++) {
    console.log(todos[i]);

}
console.log("\n");
for (i in todos) {
    console.log(i, todos[i]);
}
console.log("\n");

for(i in todos){
    console.log(todos.length-i, todos[i]);
}
console.log("\n");

for (i in todos) {
    console.log(parseInt(i)+1 , todos[i]);
}