"user strict"
function testName(){
    const name='Cho Latt Thinn';
    var elName=document.getElementById('top');
    elName.innerHTML=`My name <br> ${name}`;
}
function testVar(){
    var a=30;
    var el=document.getElementById('left');
    if(a=40){
       
        el.innerHTML='My age: <br>'+a+' year old.';
      
        console.log(a);
    }
   
    console.log(a);
}

function testLet(){
    let a=30;
    var el1=document.getElementById('right');
    if(true){
        let a='28 Street.';
        console.log(a);
      el1.innerHTML='My address:<br>'+a;
    }
    console.log(a);

}
testName();
testVar();
testLet();

function makeUpper(word){
    return word.toUpperCase();
}
let course1=makeUpper('Office 2016');
let course2=makeUpper('dtp');
let tem=makeUpper(makeUpper('Training Course <br>'));
document.getElementById("user").innerHTML=tem+ course1+"<br>"+course2;

var theString='Hello, my name is Cho Latt Thinn -I learn JavaScript';

function des(){
    
    document.write(theString+'<br>');

    console.log(theString.startsWith('Hello')); 
    document.write('Question - Start   is - Hello ? <br>');
    document.write('Start Status = '+ theString.startsWith('Hello')+'<br><br>');
    document.write('Question - End   is - JavaScript ? <br>');
    document.write('End Status = '+ theString.endsWith('JavaScript')+'<br><br>');
    document.write('Question - Including    &nbsp    &nbsp - learn ? <br>');
    document.write('Include Status = '+ theString.includes('learn')+'<br><br>');
    console.log(theString.endsWith('JavaScript ')+'<br>');
    console.log(theString.includes('learn'+'<br>'));

}

des();

