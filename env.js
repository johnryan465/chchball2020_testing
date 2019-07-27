$(function(){
  $(document).ready(function(){;
    document.body.style.setProperty("--device-width", screen.width );
    document.body.style.setProperty("--device-height", screen.height );
    e_width =  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--envelope-width'));
    d_width =  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--device-width'));
    document.body.style.setProperty("--translation", (d_width-e_width)/2 + "px" );
    console.log((d_width-e_width)/2);
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
     var $doc = $(document);
     var scale = Math.min($doc.width()/$(this).width(),$doc.height()/$(this).height())
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
