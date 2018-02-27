AOS.init({
  duration: 1500,
})

var allImages = "";

allImages += '<img src="./img/friends/1.jpg" alt="pal">';
allImages += '<img src="./img/friends/2.jpg" alt="pal">';
allImages += '<img src="./img/friends/3.jpg" alt="pal">';
allImages += '<img src="./img/friends/4.jpg" alt="pal">';
allImages += '<img src="./img/friends/5.jpg" alt="pal">';
allImages += '<img src="./img/friends/6.jpg" alt="pal">';
allImages += '<img src="./img/friends/7.jpg" alt="pal">';
allImages += '<img src="./img/friends/8.jpg" alt="pal">';
allImages += '<img src="./img/friends/9.jpg" alt="pal">';
allImages += '<img src="./img/friends/10.jpg" alt="pal">';
allImages += '<img src="./img/friends/11.jpg" alt="pal">';
allImages += '<img src="./img/friends/12.jpg" alt="pal">';
allImages += '<img src="./img/friends/13.jpg" alt="pal">';
allImages += '<img src="./img/friends/14.jpg" alt="pal">';
allImages += '<img src="./img/friends/15.jpg" alt="pal">';
allImages += '<img src="./img/friends/16.jpg" alt="pal">';
// Add more photos to the collage here

$('#photos').append(allImages);

$( "img" ).on( "mouseover", function() {
      $( this ).css( "filter", "none" );
});
