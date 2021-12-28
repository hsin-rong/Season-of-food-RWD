var clicktimes = 0;

$( document ).ready(function() {
     $(".ham").each(function(i, e){
         $(".ham img").click(function(){
            clicktimes++;
            if(clicktimes%2){
                $(".nav").animate({opacity:'0.65'}, 300);
            }
            else{
                $(".nav").animate({opacity:'0'}, 300);
            }
        });
    });
});

