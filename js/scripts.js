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
  $('.frame0').click(function(){
  $('.top0').addClass('open0');
  $('.top1').addClass('open1');
  $('.top2').addClass('open2');

  })
});

// document.getElementsByClassName('toggleButton')[0].onclick = function() {
//   $('.top').toggleClass('open');
//   open = !open;
//   // console.log($('.top').attr('class'));



// }


var invis = false;
$(window).scroll(function() {
  // console.log(open0);
   var hT = $('#topId0').offset().top,
       hH = $('#topId0').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    // console.log((hT-wH) , wS);
    // console.log($('#sidebar').position())
    // console.log($('#topId').position())
    // console.log(wS,(hT+hH-wH))

   if (wS > (hT+hH-wH)){
     $("#button_open_envelope0").click()
     $("#button_open_envelope1").click()
     $("#button_open_envelope2").click()
     // console.log("OPENING")
     open0=!open0;
   }

});


$(window).scroll(function(){
  var windowTopPos = $(window).scrollTop();
  var buttonPos = $('#button_open_envelope0').offset().top;
  var navBottomPos = $('#sidebar0').position().top + $('#sidebar0').offset().top;
// console.log(navBottomPos,buttonPos);

  if(navBottomPos >= buttonPos) {
    if(open0){
        $('.top0').toggleClass('open0');
        $('.top1').toggleClass('open1');
        $('.top2').toggleClass('open2');
     // console.log("CLOSING")

        open0=false;

    }
  }
  // console.log($('#left0').offset().top)
  if(navBottomPos >= buttonPos){
    // $('#sidebar0').css('visibility', 'hidden');
    // $('#sidebar1').css('visibility', 'hidden');
    // $('#sidebar2').css('visibility', 'hidden');

    invis=true
  }
  else{
    $('#sidebar0').css('visibility', 'visible');
    $('#sidebar1').css('visibility', 'visible');
    $('#sidebar2').css('visibility', 'visible');

  }
});
var set=false;

$(window).scroll(function() {
   var hT = $('#start').offset().top,
       wS = $(this).scrollTop();

  if(wS > hT){
    var height = $('#start').offset().top;


      $('#sidebar0').css({
          'position': 'fixed',
          'left': '20%',
          'bottom': '30%',
          'transform': 'translate(-20%, 0)',
          'width': '190px',
          'min-height':'50px',
          'height': 'auto',
          'background': '#fff',
          /*margin: auto;*/
          'box-shadow': '0 0 5px 2px #333',
          'z-index': '305'
      });

      $('#sidebar1').css({
          'position': 'fixed',
          'left': '50%',
          'bottom': '30%',
          'transform': 'translate(-50%, 0)',
          'width': '190px',
          'min-height':'50px',
          'height': 'auto',
          'background': '#fff',
          /*margin: auto;*/
          'box-shadow': '0 0 5px 2px #333',
          'z-index': '305'

      });

      $('#sidebar2').css({
          'position': 'fixed',
          'left': '80%',
          'bottom': '30%',
          'transform': 'translate(-80%, 0)',
          'width': '190px',
          'min-height':'50px',
          'height': 'auto',
          'background': '#fff',
          /*margin: auto;*/
          'box-shadow': '0 0 5px 2px #333',
          'z-index': '305'
      });

      set=true;
  }

//   else{

//         $('#sidebar0').css({
//           'position': 'relative',
//           'left': '20%',
//           'bottom': '30%',
//           'transform': 'translate(-20%, 0)',
//           'width': '190px',
//           'min-height':'50px',
//           'height': 'auto',
//           'background': '#fff',
//           /*margin: auto;*/
//           'box-shadow': '0 0 5px 2px #333',
//           'z-index': '305'
//       });

//       $('#sidebar1').css({
//           'position': 'relative',
//           'left': '20%',
//           'bottom': '30%',
//           'transform': 'translate(-20%, 0)',
//           'width': '190px',
//           'min-height':'50px',
//           'height': 'auto',
//           'background': '#fff',
//           /*margin: auto;*/
//           'box-shadow': '0 0 5px 2px #333',
//           'z-index': '305'

//       });

//       $('#sidebar2').css({
//           'position': 'relative',
//           'left': '',
//           'bottom': '',
//           'transform': '',
//           'width': '190px',
//           'min-height':'50px',
//           'height': 'auto',
//           'background': '#fff',
//           /*margin: auto;*/
//           'box-shadow': '0 0 5px 2px #333',
//           'z-index': '305'
//       });
//   }
});