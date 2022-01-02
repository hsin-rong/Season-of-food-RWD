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
        $(".springpink").toggleClass("springpinkhover");      
        $(".springyellow").animate({opacity:'1'}, 0);
        $(".springyellow").toggleClass("springyellowhover");
        $(".springpink").animate({opacity:'1'}, 0);
        $(".summerpink").removeClass("summerpinkhover");
        $(".summeryellow").removeClass("summeryellowhover");
        $(".autumnpink").removeClass("autumnpinkhover");
        $(".autumnyellow").removeClass("autumnyellowhover");
        $(".winterpink").removeClass("winterpinkhover");
        $(".winteryellow").removeClass("winteryellowhover");
    }, 
        function(){$(".navhover").removeClass("navhover1");
        $(".navspring").attr('src','./image/springnav.png');
    })
    $(".springyellow").hover(function(){  
    },function(){
        $(".springpink").removeClass("springpinkhover");
        $(".springyellow").removeClass("springyellowhover");
        $(".springpink").animate({opacity:'0'}, 0);
        
    })
});


$(document).ready(function(){
    $(".navsummer").hover(function(){
        $(".navhover").toggleClass("navhover2");
        $(".navsummer").attr('src','./image/summernavhover.png');
        $(".summerpink").toggleClass("summerpinkhover");      
        $(".summeryellow").animate({opacity:'1'}, 0);
        $(".summeryellow").toggleClass("summeryellowhover");
        $(".summerpink").animate({opacity:'1'}, 0);
        $(".springpink").removeClass("springpinkhover");
        $(".springyellow").removeClass("springyellowhover");
        $(".autumnpink").removeClass("autumnpinkhover");
        $(".autumnyellow").removeClass("autumnyellowhover");
        $(".winterpink").removeClass("winterpinkhover");
        $(".winteryellow").removeClass("winteryellowhover");
    }, 
        function(){$(".navhover").removeClass("navhover2");
        $(".navsummer").attr('src','./image/summernav.png');
      
    })
    $(".summerpink").hover(function(){  
    },function(){
        $(".summerpink").removeClass("summerpinkhover");
        $(".summeryellow").removeClass("summeryellowhover");
        $(".summerpink").animate({opacity:'0'}, 0);
    })
});


$(document).ready(function(){
    $(".navautumn").hover(function(){
        $(".navhover").toggleClass("navhover3");
        $(".navautumn").attr('src','./image/autumnnavhover.png');
        $(".autumnpink").toggleClass("autumnpinkhover");      
        $(".autumnyellow").animate({opacity:'1'}, 0);
        $(".autumnyellow").toggleClass("autumnyellowhover");
        $(".autumnpink").animate({opacity:'1'}, 0);
        $(".springpink").removeClass("springpinkhover");
        $(".springyellow").removeClass("springyellowhover");
        $(".summerpink").removeClass("summerpinkhover");
        $(".summeryellow").removeClass("summeryellowhover");
        $(".winterpink").removeClass("winterpinkhover");
        $(".winteryellow").removeClass("winteryellowhover");
    }, 
        function(){$(".navhover").removeClass("navhover3");
        $(".navautumn").attr('src','./image/autumnnav.png');
      
    })
    $(".autumnpink").hover(function(){  
    },function(){
        $(".autumnpink").removeClass("autumnpinkhover");
        $(".autumnyellow").removeClass("autumnyellowhover");
        $(".autumnpink").animate({opacity:'0'}, 0);
    })
});


$(document).ready(function(){
    $(".navwinter").hover(function(){
        
        $(".navhover").toggleClass("navhover4");
        $(".navwinter").attr('src','./image/winternavhover.png');
        $(".winterpink").toggleClass("winterpinkhover");      
        $(".winteryellow").animate({opacity:'1'}, 0);
        $(".winteryellow").toggleClass("winteryellowhover");
        $(".winterpink").animate({opacity:'1'}, 0);
         $(".springpink").removeClass("springpinkhover");
        $(".springyellow").removeClass("springyellowhover");
        $(".summerpink").removeClass("summerpinkhover");
        $(".summeryellow").removeClass("summeryellowhover");
        $(".autumnpink").removeClass("autumnpinkhover");
        $(".autumnyellow").removeClass("autumnyellowhover");
    }, 
        function(){$(".navhover").removeClass("navhover4");
        $(".navwinter").attr('src','./image/winternav.png');
      
    })
    $(".winterpink").hover(function(){  
    },function(){
        $(".winterpink").removeClass("winterpinkhover");
        $(".winteryellow").removeClass("winteryellowhover");
        $(".winterpink").animate({opacity:'0'}, 0);
    })
});

$(document).ready(function(){
    $(".navhome").hover(function(){
        $(".navhover").toggleClass("navhover5");
        $(".navhome").attr('src','./image/homenavhover.png');
        $(".springpink").removeClass("springpinkhover");
        $(".springyellow").removeClass("springyellowhover");
        $(".summerpink").removeClass("summerpinkhover");
        $(".summeryellow").removeClass("summeryellowhover");
        $(".autumnpink").removeClass("autumnpinkhover");
        $(".autumnyellow").removeClass("autumnyellowhover");
        $(".winterpink").removeClass("winterpinkhover");
        $(".winteryellow").removeClass("winteryellowhover");}, 
        function(){$(".navhover").removeClass("navhover5");
        $(".navhome").attr('src','./image/homenav.png');})
});

$(document).ready(function(){ 
    $('.loading').toggleClass("loadingfade");  
    });

$(".seasontitle").click(function(){
    $('.seasontitle').addClass('.rotateX');
});
