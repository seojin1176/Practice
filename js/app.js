

$(function(){
    $('.sub').slideUp(1);
    $('.gnb>li').mouseenter(function(){
       $('.sub').stop().slideDown();
    })
    $('.gnb>li').mouseleave(function(){
       $('.sub').stop().slideUp();
    })
    
    $('.newsMenu').click(function(){
       $('.news').show();
       $('.gallery').hide();
       $('.newsMenu').addClass('on');
       $('.galleryMenu').removeClass('on');      
    })
    $('.galleryMenu').click(function(){
       $('.gallery').show();
       $('.news').hide();
       $('.galleryMenu').addClass('on');
       $('.newsMenu').removeClass('on');      
    })
    
    $('.open').click(function(){
       $('.popupBox').show()
    })
    $('.close').click(function(){
       $('.popupBox').hide()
    })
    
 
 /*
 $('.menu1>a').click(function(){
    $('.notice').show();
    $('.gallery').hide();
    $('.menu1>a').addClass('on');
    $('.menu2>a').removeClass('on');   
 })
 $('.menu2>a').click(function(){
    $('.notice').hide();
    $('.gallery').show();
    $('.menu2>a').addClass('on');
    $('.menu1>a').removeClass('on');   
 })
 */
 
 
 })