//Featured work 
$(function(){
    'use strict';
    $(' .featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        });
   
});
