$(function(){

    $('.sub_menu > li').mouseover(function(){

     $(this).children('.sub_nav').stop().slideDown();

    }).mouseout(function(){

     $('.sub_nav').stop().slideUp();

    });

 });