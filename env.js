$(function(){
  function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichAnimationEvent();
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
    }
    if(!$('.clock').hasClass('hidden')){
      $(this).removeClass('hidden').addClass('show');
    }
  });
});
