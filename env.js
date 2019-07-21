$(function(){
  $('.envelope').click(function(){
    if(!$('.envelope').hasClass('open')){
      $(this).removeClass('new').addClass('open');
    }
  });
});
