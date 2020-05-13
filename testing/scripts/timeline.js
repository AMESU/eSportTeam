var speed = 600;

$(document).ready(function(){
   $('.el').bind('mouseover', function(event){
      $('.description').stop().animate({
         display: "block"
      }. speed).fadeIn;
   }); 
});