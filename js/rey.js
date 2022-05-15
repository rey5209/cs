// When document has been loaded, then allow body to scroll and hide preloader class.
 
//$(function(e){
  // $(".preloader").hide();
  // $("body").css("overflow", "scroll");
  // });

 // loading-msg

 setTimeout(function(){
    $('.preloader').fadeToggle();
    $("body").css("overflow", "scroll");
}, 1500);

