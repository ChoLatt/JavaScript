(function() {
    "use strict";

    // Create an Object of Divs on-screen
    var elDivShowNewBand = document.getElementById("divShowNewBand");
    var elDivShowNewBand1 = document.getElementById("divShowNewBand");

    // Create an Object of the Button on-screen
    var elBtnMakeName = document.getElementById("btnMakeName");
    var elBtnMakeName1 = document.getElementById("btnMakeName1");
   
    function fnGenerateNames() {
        let msg = "Show!"
        console.log(msg);
        elDivShowNewBand.innerHTML = msg;
    }
    function fnGenerateName() {
        let msg1 = "Hide!"
        console.log(msg1);
        elDivShowNewBand1.innerHTML = msg1;
    }
    // Event Listener, to make the Button work.
    elBtnMakeName.addEventListener("click", fnGenerateName,true);
    elBtnMakeName1.addEventListener("click", fnGenerateNames,true);
}());