"user strict"
function *g1(){
    
    console.log("Welcome ");
    yield "Mandalay ...<br>";
   
    console.log("ME");
    yield "Myanmar...<br> ";
    return"Returned... "
    
}
var g= g1()

document.write(g.next().value);
document.write(g.next().value);
document.write(g.next().value);

