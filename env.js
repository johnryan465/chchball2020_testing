$(function(){
  $(document).ready(function(){;
    document.documentElement.style.setProperty("--device-width",  $(window).innerWidth() );
    document.documentElement.style.setProperty("--device-height", $(window).innerHeight() );
    e_width =  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--envelope-width'));
    d_width =  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--device-width'));
    document.documentElement.style.setProperty("--translation", (d_width-e_width)/2 + "px" );
    e_height = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--envelope-height'));
    d_height =  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--device-height'));
    document.documentElement.style.setProperty("--starting-envelope-height", (d_height-e_height)/2 + "px" );
    $('.envelope').addClass('new');
    $('.envelope').css("opacity",1);
  });
  $(".top-flap")
  .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
   function(e){
      $('.slide-in').addClass('show');
      $('.slide-in').css('opacity',1);
      $(this).off(e);
   });
   //When the letter has finished we want to scale up the image
   $(".letter")
   .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
   function(e){
     console.log("Letter done")
     var $doc = $(window);
     var scale = Math.min(  $doc.width()/$("#inv").width(),$doc.height()/$("#inv").height());
     document.body.style.setProperty("--scale-factor", scale);
     $("#inv").addClass("full-screen")
     $(this).off(e);
   });

   $('.envelope').click(function(){
     if(!$('.envelope').hasClass('open')){
       $(this).addClass('open');
       $('.seal').addClass('flipped');
     }
     $(this).off();
   });
});
