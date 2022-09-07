$(function(){

    $.ajax({

      url: "./js/box_01.json",
      dataType: "json",
      success : function(data){

        if(data.length>0){
          for(var i in data){
            $(".box1").eq(i).append('<a href="#"><img src="'+data[i].url+'"></a>');      
            $(".box1").eq(i).append('<h5><a href="#">'+data[i].name+'</a></h5>');
            $(".box1").eq(i).append('<p><a href="#">'+data[i].size+'</a></p>');
            $(".box1").eq(i).append('<h6><a href="#">'+data[i].price+'</a></h6>');
          }
        }
      }
    });


  });