var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat heathy"
];

var todoCount = todos.length ;
while (todoCount) {
    console.log(todos[todoCount-1]);
    todoCount--
}

var counterTwo = 10;
do {
    console.log(counterTwo)
    counterTwo--;
} while (counterTwo > 0);