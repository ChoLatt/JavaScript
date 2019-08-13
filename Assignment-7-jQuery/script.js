// Using the new jQuery IIFE
$(function () {
    "use stric";

    // Creating Variables via jQuery
    // Common practice to use a $ in front of the Variable name
    // If you create a jQuery-based Variable, you must then use jQuery Methods on it
  


    var $elSwForm = $("#swForm"),
        $elBtnGo = $("#btnGo"),
        $elBtnClear = $("#btnClear"),
        $elDivYou = $("#divYou"),
        $elDivDroid = $("#divDroid"),
        $elDivType = $("#divType"),
        $elAnswer = $("#answer"),
        $elDroidPic = $("#droidPic");
    
    var droidType = ["Astromech", "Battle", "Interrogation",
                    "Medical", "Protocol", "Scout"],
        droidPic = ["astromech.png", "battle.png", "interrogation.png",
                    "medical.png", "protocol.png", "scout.png"];    
    
    $("label").hide().fadeIn(1000);
    $("input").hide().fadeIn(1500);

    // Define Function before Event Handlers
    function fnClear() {
        $elSwForm[0].reset();
    }

    // Clear Output
    function fnClearOutput() {
        $elDivYou.html("");
        $elDivDroid.html("");
        $elDivType.html("");
        $elDroidPic.attr("src", "");
        fnClear();
    }

    function fnMakeDroid() {
        var $valInFirst = $("#inFirst").val(),
            $valInLast = $("#inLast").val(),
            $valInDOB = $("#inDOB").val();
        
        // console.log($valInFirst, $valInLast, $valInDOB);

        // Check that ALL three Input Boxes are filled in
        if(($valInFirst) && ($valInLast) && ($valInDOB)) {
            // Generate a Random Number based on the length of the random array
            var randomDroid = Math.floor(Math.random() * droidType.length);
            $elAnswer.html("Star Wars Droid Name and Type ");
            // Show feedback on-screen with some animation
            $elDivYou.html("Your name is: " + ($valInFirst  + $valInLast)).hide().slideDown();
            // Run the Function to generate the Droid Name
            $elDivDroid.html("Your Droid name is: " +
                            fnDroidNameGen($valInFirst, $valInLast, $valInDOB)).hide().delay(500).slideDown();
            $elDivType.html("Your Droid type is: " +
                            droidType[randomDroid]).hide().slideDown();
                
            $elDroidPic.attr("src", "images/" + droidPic[randomDroid]);

            // fnClear();
        // when not all three input boxes are filled in, let the user know
        } else {             
            $elDivYou.html("Please enter all fields!").hide().delay(500).slideDown();
                    
        }
    } // END of fnMakeDroid()

    // Function with three Parameters (firstName, lastName, DOB)
    function fnDroidNameGen(n1, n2, dob) {
         // 1968-06-12, 12/06/1968
         // Based on the Month of DOB, Create a Base-10 Number
        var no = parseInt(dob.slice(5, 7), 10),
        // String to display the Droid Name
            myDroid = "";
        
        // If the Month Variable is Not a Number, 
            if (isNaN(no)) {
        // Create a Random Number based on 12 posibilities (rounded up)
            no = Math.ceil(Math.random() * 12);
        }

        // Based on the Month Variable, pick a Droid Name Scheme
        switch (no) {
            case 1:
                console.log("BT-1");
                // Use slice() to pick portions of the Name typed
                // .toUpperCase() Method forces letters to Uppercase
                // Each Case is based on the Month the user typed
                myDroid = n1.slice(0, 2).toUpperCase() + "-" + no;
                break;

            case 2:
                console.log("R2-D2");
                myDroid = n1.slice(0, 1).toUpperCase() + no + "-" + n2.slice(0, 1).toUpperCase() + no;
                break;

            case 3:
                console.log("C-3PO");
                myDroid = n1.slice(0, 1).toUpperCase() + "-" + no + n2.slice(0, 2).toUpperCase();
                break;

            case 4:
                console.log("4-LOM");
                myDroid = no + "-" +n1.slice(0, 1).toUpperCase() + n2.slice(0, 2).toUpperCase();
                break;

            case 5:
                console.log("R5-G8");
                myDroid = n1.slice(0, 1).toUpperCase() + no +
                    "-" + n2.slice(0, 1).toUpperCase() + "8";
                break;


            // In the event of a Case I didn't think of, Default taks over
            default:
                console.log("0-0-0");
                myDroid = no + "-" + no + "-" + no;
                break;
        }
        // After the Droid Name Creation, return the string back to the rest of the program
        return myDroid;
    }    
    

    // jQuery Event Handlers
    $elBtnGo.on("click", fnMakeDroid);
    // In the Event of a Click, run the specified Function
    $elBtnClear.on("click", (fnClear,fnClearOutput));
}); // jQuery IIFE does not need closing ()



$(function(){
    $('label,h1').prepend('*');         
    //Insert content inside the Label and Heading 1 Elements

    var backgroundColor= $('h2').css('background-color');
    $('h2').css({
        'background-color': 'red',
        'color': 'blue',
          });

    $('h3').css({
           
            'color': 'darkred',
            'line-height': '39px',
              });

//adds a new value (bullet) 
    $('h1.bullet').addClass('pp');

   // using animation (change values of CSS properties)
    $("h2").on("click", function() {
            $(this).animate({
                paddingRight: '+=100'
            });  
            
    $("h2").on("click", function() {
        
        $("h2").hide()
        
                });
           
       
    $("h3").on("click", function() {
        
        $(this).animate({
            paddingLeft: '+=100'
            
            });
             
            });

        });
          
    });    
        

  
  
    

    
   
  
