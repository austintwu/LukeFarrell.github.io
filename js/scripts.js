$(document).ready(function(){
  $('.frame').click(function(){
    $('.top').addClass('open');
    $('.message').addClass('pull');
  })
});

$(window).scroll(function() {
   var hT = $('#topId').offset().top,
       hH = $('#topId').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $("#button_open_envelope").click()
   }
});

