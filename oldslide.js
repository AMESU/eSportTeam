
/* 

#start -> start -> con_1       [1]
#players -> players -> con_2   [2]
#partners -> partners -> con_3 [3]
#kontakt -> kontakt -> con_4   [4]

*/

var speed = 750;
var isblue = false;
var isred = false;
var isyellow = false;

$(function(){
   if(isblue === false && isred === false && isyellow === false){
       $('#players').bind('click', function(event){
          $('.con_1').stop().animate({
              marginLeft: "-100vw"
          }, speed);
          $('.con_2').stop().animate({
              marginLeft: "0vw"
          }, speed);
          $('.con_3').stop().animate({
              marginLeft: "0vw"
          }, speed);   
       });
       $('#partners').bind('click', function(event){
           $('.con_1').stop().animate({
              marginLeft: "-100vw" 
           }, speed);
           $('.con_2').stop().animate({
               marginLeft: "-100vw"
           }, speed);
           $('.con_3').stop().animate({
              marginLeft: "0vw" 
           }, speed);
       });
       $('#kontakt').bind('click', function(event){
          $('.con_1').stop().animate({
              marginLeft: "-100vw" 
           }, speed);
           $('.con_2').stop().animate({
               marginLeft: "-100vw"
           }, speed);
           $('.con_3').stop().animate({
               marginLeft: "-100vw"
           }, speed);
       });
       
       $('#start').bind('click', function(event){
          $('.con_3').stop().animate({
              marginLeft: "0vw"
          }, speed);
          $('.con_2').stop().animate({
              marginLeft: "0vw"
          }, speed);  
          $('.con_1').stop().animate({
              marginLeft: "0vw"
          }, speed); 
       });
   }
});
