$(function(){
  $(".top-flap")
  .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
   function(e){
      $('.slide-in').addClass('show');
      $(this).off(e);
   });
   $(".letter")
   .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
    function(e){
      var $doc = $(document);
      var centerX = $doc.width() / 2;
      var centerY = $doc.height() / 2;
      var scale = Math.min($doc.width()/$(this).width(),$doc.height()/$(this).height())
      $("#inv").css({
        "transform": "scale(" + scale + ")",
        "transition-duration": "0.5s"
      });
      console.log(scale)
      $(this).off(e);
    });
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
    }
    $('.seal').addClass('flipped');
    $('.slide-in').css('z-index', 10);
    $('.slide-in').css('overflow', 'visible');
    var $doc = $(document);
    var centerX = $doc.width() / 2;
    var centerY = $doc.height() / 2;
    $("#inv").css({
      "transform": "translateX(" + centerX + ")",
      "transition-duration": "0.5s"
    });
    $(this).off();
  });
});
