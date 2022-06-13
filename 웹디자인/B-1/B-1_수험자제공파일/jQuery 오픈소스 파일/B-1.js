$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(".submenu").stop().slideUp();
    });

    var index = 0, prev, imgList = $(".imglist li"), size = imgList.length;
    setInterval(function(){ 
        prev = index;   
        index++;
        if(index >= size) index = 0;
        imgList.eq(index).css({left: 1200+'px'});
        imgList.eq(index).animate({left: 0},1000);
        imgList.eq(prev).animate({left : -1200+'px'},1000);
    }, 3000);
    
    $(function(){
        $('.con1>li>a').click(function (){
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;

        });
    });
    $(".notice li:first").click(function(){
        $(".modal_up").show();
    });
    $(".btn").click(function(){
        $(".modal_up").hide();
    });
});