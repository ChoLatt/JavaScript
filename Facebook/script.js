var user = {
    username: "Cherry Thinn",
    password: "ct1999"
};

var database = [
    user,
    {
        username: "Phyo Myat Aung",
        password: "pma1985"
    },
    {
        username: "Phyo Pyae Sone",
        password: "pps1983"
    },
    {
        username: "Wine Su Khaing Thein",
        password: "wskt1983"
    },
];

var newsFeed = [
    {
        username: "PhyoMyat",
        timeline: "<img src=images/pma.jpg width=150px/ ><br/>'  ဘယ်သူတွေ ဘာ​ပြောပြော'"+"<p>'သုည'</p>",
       
        
    },
    {
        username: "PhyoPyae",
        timeline: "<img src=images/pps.jpg width=150px/><br/>'အသည်းနှလုံး မရှိတဲ့လူ'"+"<p>'လရိပ်'</p>",
    },
    {
        username: "WineSu",
        timeline: "<img src=images/wskt.jpg width=150px/><br/>'ပြန်လာခဲ့ပါ'"+"<p>'လမ်းမကြီး ရဲ့ နံ​ဘေး'</p>",
    },
    {
        username: "Cherry",
        timeline: "<img src=images/ct.jpg width=150px/><br/>'ခွင့်လွှတ်ဖို့ တောင်းပန်ချင်'",
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }    
    }
    return false;
}

function signIn(username, password) {
    var show='';
    // console.log(isUserValid(username, password));
  
    if (isUserValid(username, password)) {
            console.log(newsFeed);
        for (i=0; i<newsFeed.length; i++) {
           show +="<h2>"+newsFeed[i].username+"</h2> ";
          
           show +="<p>"+newsFeed[i].timeline+"</p><hr/>";

           var el=document.getElementById('timeline');
           el.innerHTML=show;
      
        }
        } else {
           
            document.write("Sorry, wrong username and password!");
        }
      
}

signIn(userNamePrompt, passwordPrompt);

$(':header').addClass('headline');
$('div[id!="timeline"]').hide().fadeIn(1400);
$('div').on('blur', function() {
  $(this).remove();
});

$('h1[id!="one"]')
.hide()
.delay(500)
.fadeIn(1400); 

$('h1.priority').addClass('highlight');