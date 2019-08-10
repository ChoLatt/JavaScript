$(function () {
    $("h2,h3,h4,h5,h6,img").show();

    $("h1").on("click", function() {
        $("h2").show().animate({
            "font-size": "30",
            "width": "75%",
            "bottom": "+=30px"
        }, 1000);
        $("h3").show().animate({
            "font-size": "30",
            "width": "75%",
            "left": "+=30px"
        }, 1000);
        $("h4").show().animate({
            "font-size": "30",
            "width": "75%",
            "right": "+=30px"
        }, 1000);
        $("h5").show().animate({
            "font-size": "30",
            "width": "75%",
            "top": "+=30px"
        }, 1000);
        $("h6").show().animate({
            "font-size": "30",
            "width": "75%",
            "right": "+=30px"
        }, 1000);


        $("img").toggle().fadeToggle(2000);
    });
});
