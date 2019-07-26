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
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
    }
    $('.seal').addClass('flipped');
    $('.slide-in').css('z-index', 10);
  });
});
