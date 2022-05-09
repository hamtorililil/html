
var imgs = 4;
var now = 0;

$(document).ready(function () {
    $(".nav>li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    });
    $(".nav>li").mouseleave(function () { 
        $(this).children(".submenu").stop().slideUp();
    });

    start();
});