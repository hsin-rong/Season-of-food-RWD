var clicktimes = 0;

$( document ).ready(function() {
     $(".ham").each(function(i, e){
         $(".ham img").click(function(){         
            clicktimes++;
            if(clicktimes%2){
                $(".nav").animate({opacity:'0.65'}, 300);
                $(".ham img").attr('src','./image/ham icon2.png');
            }
            else{
                $(".nav").animate({opacity:'0'}, 300);
                $(".ham img").attr('src','./image/ham icon.png');
            }
        });
    });
});


$(document).ready(function(){
    $(".navspring").hover(function(){
        $(".navhover").toggleClass("navhover1");
        $(".navspring").attr('src','./image/springnavhover.png');
        $(".springpink").toggleClass("springmenu");
        $(".springpink").toggleClass("springpinkhover");
    }, 
        function(){$(".navhover").removeClass("navhover1");
        $(".navspring").attr('src','./image/springnav.png');
        $(".springpink").removeClass("springpinkhover");})
});


$(document).ready(function(){
    $(".navsummer").hover(function(){
        $(".navhover").toggleClass("navhover2");
        $(".navsummer").attr('src','./image/summernavhover.png');}, 
        function(){$(".navhover").removeClass("navhover2");
        $(".navsummer").attr('src','./image/summernav.png');})
});
$(document).ready(function(){
    $(".navautumn").hover(function(){
        $(".navhover").toggleClass("navhover3");
        $(".navautumn").attr('src','./image/autumnnavhover.png');}, 
        function(){$(".navhover").removeClass("navhover3");
        $(".navautumn").attr('src','./image/autumnnav.png');})
});
$(document).ready(function(){
    $(".navwinter").hover(function(){
        $(".navhover").toggleClass("navhover4");
        $(".navwinter").attr('src','./image/winternavhover.png');}, 
        function(){$(".navhover").removeClass("navhover4");
        $(".navwinter").attr('src','./image/winternav.png');})
});
$(document).ready(function(){
    $(".navhome").hover(function(){
        $(".navhover").toggleClass("navhover5");
        $(".navhome").attr('src','./image/homenavhover.png');}, 
        function(){$(".navhover").removeClass("navhover5");
        $(".navhome").attr('src','./image/homenav.png');})
});

$(document).ready(function(){ 
    $('.loading').fadeOut();  
    });

$(".seasontitle").click(function(){
    $('.seasontitle').addClass('.rotateX');
});