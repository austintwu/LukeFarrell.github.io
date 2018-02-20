AOS.init({
  duration: 1500,
})

var allImages = "";

allImages += '<img src="./img/friends/rr.jpg" alt="pal">';
allImages += '<img src="./img/friends/fem.jpg" alt="pal">';
allImages += '<img src="./img/friends/adam.jpg" alt="pal">';
allImages += '<img src="./img/friends/cg.jpg" alt="pal">';
allImages += '<img src="./img/friends/lukeandtina.jpg" alt="pal">';
allImages += '<img src="./img/friends/mbb.jpg" alt="pal">';
allImages += '<img src="./img/friends/mandk.jpg" alt="pal">';
allImages += '<img src="./img/friends/treyandtina.jpg" alt="pal">';
allImages += '<img src="./img/friends/cooper.jpg" alt="pal">';
// Add more photos to the collage here

$('#photos').append(allImages);

var open=false
$(document).ready(function(){
  $('.frame').click(function(){
  $('.top').addClass('open');

  })
});


var invis = false;
$(window).scroll(function() {
   var hT = $('#topId').offset().top,
       hH = $('#topId').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    // console.log((hT-wH) , wS);
    // console.log($('#sidebar').position())
    // console.log($('#topId').position())

   if (wS > (hT+hH-wH)-300){
     $("#button_open_envelope").click()
     open=!open;
   }
});

$(window).scroll(function(){
  var windowTopPos = $(window).scrollTop();
  var buttonPos = $('#button_open_envelope').offset().top;
  var navBottomPos = $('#sidebar').offset().top + $('#sidebar').outerHeight();



  if(navBottomPos >= buttonPos) {
    if(open){
        $('.top').toggleClass('open');
        open=false;

    }
  }
  console.log($('#left').offset().top)
  if(navBottomPos >= buttonPos){
    $('#sidebar').css('visibility', 'hidden');
    invis=true
  }
  else{
    $('#sidebar').css('visibility', 'visible');
  }
});

$( "img" ).on( "mouseover", function() {
      $( this ).css( "filter", "none" );
});