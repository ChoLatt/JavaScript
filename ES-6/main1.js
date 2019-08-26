class User{
    constructor(username, course){
        this.username=username;
        this.course=course;

    }
    static countUsers(){
        document.write("<h3>August User Record <br>")
    }
     countUsers1(){
        document.write('<h3>'+this.username + ' = Room 2  <br>');
        document.write(this.username+ ' is '+this.course+ ' Course</h3> <br><br>');
    }
    register(){
        console.log(this.username+' is now registered. ')
        document.write('<h3>'+this.username+' is now registered. <br></h3>')
        
    }
}

let clt=new User(
    'Su Su Win',
    'Graphics'
);


clt.register();

User.countUsers();
clt.countUsers1();

class Member extends User{
    constructor(username, course, time){
        super(username, course);
        this.record=time;

    }
    getRecord(){
        console.log(this.course+' is '+this.record+ ' Course ' );
        document.write('<h3>User name is '+ this.username +'.'+'<br>');
        document.write(this.username +' is '+this.record+'<br></h3>');
  
    }
}

let cl= new Member(
    "Myint Myat Su",
    "DTP",
    "3-5pm",
)
cl.getRecord();
cl.register();
console.log(0xFF);
console.log(0b01100001);
console.log(0o100);
console.log(Number.isFinite(-3));
console.log(Number.isNaN("string"));
console.log(Number.isInteger(-3));
console.log(Infinity-Infinity);

function greet($greeting="Hello World "){
    console.log($greeting);
    document.write('<br>'+$greeting);
    
}

greet();
let args1=[1,2,3];
let args2=[4,5,6];
function test(){
    console.log(args1+","+args2);
    document.write(args1+","+ args2+'<br>');
}
test()

test(...args1,...args2);
test(...args2);


let myArray=[11,22,34,65,34];
let mySet=new Set(myArray);

mySet.add("100");
mySet.add(99);

mySet.forEach(function(val){
    console.log(val);
    document.write(val+'  ');
    
})
console.log(mySet.size);
document.write('<br> My Array size is '+mySet.size+'<br>');
let myMap=new Map([["a1","Hello"],["b2","GoodBye"]]);

myMap.set("c3","foo");
myMap.delete("a1");

myMap.forEach(function(val1){
    console.log(val1);
    document.write(val1+'  ');
    
})
let carWeakSet = new WeakSet();
let car1 = {
    make:"Honda",
    model:"Civic"

}
let car2={
    make:"Toyota",
    model:"Camry"
}
carWeakSet.add(car1);
carWeakSet.add(car2);

let carWeakMap = new WeakMap();
let key1={
    id:1
}
let key2={
    id:2

}

carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);
console.log(carWeakMap);
