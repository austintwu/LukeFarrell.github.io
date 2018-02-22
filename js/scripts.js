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

$( "img" ).on( "mouseover", function() {
      $( this ).css( "filter", "none" );
});

var open0=false

$(document).ready(function(){
  $('.frame').click(function(){
  $('.top0').addClass('open0');
  $('.top1').addClass('open1');
  $('.top2').addClass('open2');

  })
});


var invis = false;
$(window).scroll(function() {
   var hT = $('#topId0').offset().top,
       hH = $('#topId0').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    // console.log((hT-wH) , wS);
    // console.log($('#sidebar').position())
    // console.log($('#topId').position())

   if (wS > (hT+hH-wH)){
     $("#button_open_envelope0").click()
     $("#button_open_envelope1").click()
     $("#button_open_envelope2").click()

     open0=!open0;
   }
});


$(window).scroll(function(){
  var windowTopPos = $(window).scrollTop();
  var start_trigger = $('#start_trigger').offset().top + 350;
  var buttonPos = $('#button_open_envelope0').offset().top;
  var navBottomPos = $('#sidebar0').offset().top + $('#sidebar0').outerHeight();


  if(navBottomPos >= buttonPos) {
    if(open0){
        $('.top0').toggleClass('open0');
        $('.top1').toggleClass('open1');
        $('.top2').toggleClass('open2');

        open0=false;

    }
  }
  // console.log($('#left0').offset().top)
  if(navBottomPos >= buttonPos || navBottomPos<=start_trigger){
    $('#sidebar0').css('visibility', 'hidden');
    $('#sidebar1').css('visibility', 'hidden');
    $('#sidebar2').css('visibility', 'hidden');

    invis=true
  }
  else{
    $('#sidebar0').css('visibility', 'visible');
    $('#sidebar1').css('visibility', 'visible');
    $('#sidebar2').css('visibility', 'visible');
  }
});