$( document ).ready(function() {
    $(".leftdoor").click(function(){      
        $(".leftdoor").toggleClass("disleftdoor");
    });
});

$( document ).ready(function() {
    $(".rightdoor").click(function(){      
        $(".rightdoor").toggleClass("disrightdoor");
    });
});

$(document).ready(function(){ 
    $('.loading').fadeOut();  
    });