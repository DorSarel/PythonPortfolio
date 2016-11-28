//Scroll.js

var headerHeight = $("header").height();

$(window).scroll(function(){
    if ($(window).scrollTop() > headerHeight) {
        $("header").addClass("fixed");
    } else {
        $("header").removeClass("fixed");
    }
});