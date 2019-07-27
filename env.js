$(function(){

  function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'WebkitTransition' :'webkitTransitionEnd',
      'MozTransition'    :'transitionend',
      'MSTransition'     :'msTransitionEnd',
      'OTransition'      :'oTransitionEnd',
      'transition'       :'transitionEnd'
    }

    for(t in transitions){
      if( el.style[t] !== undefined ){
        return transitions[t];
      }
    }
  }

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
      var $card = $(this);
      var origX = $card.data('orig-x');
      var origY = $card.data('orig-y');
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
  });
});
