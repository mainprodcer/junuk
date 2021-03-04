var slidelist = document.querySelector(".poster_list");

var posters = document.querySelectorAll(".poster") ;


var btnr = document.querySelector(".arrowright");
var btnl = document.querySelector(".arrowleft");

var posterlen = posters.length;
var slidespeed = 300;
var cursor = 0;



btnr.addEventListener('click', function(){
  if(cursor < 1 ){
  
    slidelist.style.transition = slidespeed+ "ms";
  slidelist.style.transform = "translate3d(-" + (1280 * (cursor + 1)) + "px, 0px, 0px)";
  
}
  
  else{
      
    slidelist.style.transition = slidespeed+ "ms";
    slidelist.style.transform = "translate3d( 0px, 0px, 0px)";
    cursor=-1;
  }
  

  cursor++;


})

btnl.addEventListener('click', function(){
    if(cursor === 1 ){
    
      slidelist.style.transition = slidespeed+ "ms";
    slidelist.style.transform = "translate3d( 0px, 0px, 0px)";
    cursor=-1;
    
  }



})
