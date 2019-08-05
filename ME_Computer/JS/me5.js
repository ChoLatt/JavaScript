var today=new Date();
var hourNow=today.getHours();
var greeting;

if (hourNow >18){
    greeting="Good evening!";
    }
    else if (hourNow>12) {
        greeting='Welcome to ME\nGood afternoon!';
    }
    else if (hourNow>0){
        greeting='Good Morning!';
    }
    else{
        greeting='Welcome!';
    }
    document.write('<h2>'+greeting+'</h2>');
    