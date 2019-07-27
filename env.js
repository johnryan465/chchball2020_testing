$(function(){
  $(".top-flap")
  .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
   function(e){
      $('.slide-in').addClass('show');
      $(this).off(e);
   });
   //When the letter has finished we want to scale up the image
   $(".letter")
   .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
    function(e){
      var $doc = $(document);
      var scale = Math.min($doc.width()/$(this).width(),$doc.height()/$(this).height())
      document.body.style.setProperty("--scale-factor", scale);
      $("#inv").addClass("full-screen")
      $(this).off(e);
    });
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
      $('.seal').addClass('flipped');
    }
    $(this).off();
  });
});
