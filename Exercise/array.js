// array and for loop
var list = ["tiger", "cat", "bear", "bird"];
console.log("List of animals is ", list);

newList=list.slice(0,2)
console.log(newList);
newList=list.splice(1,3);
console.log(newList);
newList.push("dog","snake");
console.log(newList);
newList=list.splice(0,1);
console.log(newList);
newList.push("queen","snow");
console.log(newList);

for(l in list){
    console.log(list);
}
console.log("Array List.......");
newList.forEach(l => {
    console.log(l);

});


