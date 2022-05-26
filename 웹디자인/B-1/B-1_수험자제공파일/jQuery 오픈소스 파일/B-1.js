$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(".submenu").stop().slideUp();
    });
});