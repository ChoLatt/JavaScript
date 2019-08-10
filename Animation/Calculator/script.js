(function() {
    "use strict";

    // Define variables
    var elBtnCal = document.getElementById("btnCal"),
        elBtnClear = document.getElementById("btnClear"),
        elResult = document.getElementById("result"),
        elForm = document.getElementById("form");

    function fnCal() {
        var num1 = parseFloat(document.getElementById("num1").value),
            num2 = parseFloat(document.getElementById("num2").value),
            sign = document.getElementById("sign").value,
            result;     

            switch(sign){
                case "+":
               
                result = num1 + num2;
                break;

                case "-":
                result = num1+ num2;
                break;

                case "*":
                result = num1 * num2;
                break;

                default:
                result = num1 / num2;
                break;
               
                     }  
                     elResult.value = result; 
                }

    function fnClear() {
        elForm.reset();
        }
        
    elBtnCal.addEventListener("click", fnCal, false);
    elBtnClear.addEventListener("click", fnClear, false);
    }());
        
   