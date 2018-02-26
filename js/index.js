// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

var envStartHeight=$('#memo1').offset().top;
var memoStartHeight=$('#blue0').offset().top;
// Scene Handler

// Scene2 Handler
console.log(memoStartHeight-envStartHeight);
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger2", // point of execution
  triggerHook:"onCenter",
  duration: memoStartHeight-envStartHeight +25// pin the element for a total of 400px

})
.setPin("#pinned-element2") // the element we want to pin
.addTo(controller);

window.onresize = function(event) {
    var envStartHeight=$('#memo1').offset().top;
  var memoStartHeight=$('#blue0').offset().top;
};
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#button_open_envelope0", // point of execution
  triggerHook:.8

})
.setClassToggle(".top0", "open0")
// .setPin("#pinned-element2") // the element we want to pin
.addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#top0", // point of execution
  triggerHook: 0.2
})
.setClassToggle(".top0", "close0")
// .setPin("#pinned-element2") // the element we want to pin
.addTo(controller);


// var tl = new TimelineMax();
// tl.set($('#memo1'), {css:{zIndex:325}}) // set is basically a 0-second duration tween