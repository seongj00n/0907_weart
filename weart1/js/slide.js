
   function slide(){
    $('.slide').stop().animate({marginLeft:-1900}, function(){
       $('.slide li:first').appendTo('.slide');
       $('.slide').css({marginLeft:0});
    });
   }

   function next(){
      $('.slide').stop().animate({marginLeft:-1900}, function(){
         $('.slide li:first').appendTo('.slide');
         $('.slide').css({marginLeft:0});
      });
     }

     function prev(){      
         $('.slide li:last').prependTo('.slide');
         $('.slide').css({marginLeft:-1900});
         $('.slide').stop().animate({marginLeft:0});
     }
   
   $(".next").click(function(){
      next();
   });

   $(".prev").click(function(){
      prev();
   });

   setInterval(slide, 5000);

 