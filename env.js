$(function(){
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
    }
    else if (!$('.envelope').hasClass('new')){
      $(this).removeClass('open').addClass('n');
    }

  });
});
