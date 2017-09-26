module.exports.resizeInit = function(){
$(window, document).resize(function(){
  resize();
})
//  .load(function(){
//    alert(2);
//    //$('.datavLayout').css('visibility', 'visible');
//   // resize();
//    //$('#datavLoading').fadeOut();
//  });
window.share = {
 datacenter: 'http://localhost:8080/',
 ratioX: null,
 ratioY: null,
 event: new EventEmitter(),
 screen: {}
}
window.screen={
 width:1280,
 height:1024,
 display:3
};
$('head').append('<meta name="viewport" content="width='+window.screen.width+'"/>');
function resize() {
 if (window.screen.display == 2) {
   resizeCenter();
 } else if (window.screen.display == 3) {
   resizeFull();
 } else {
   resizeWidth();
 }
 window.share.event.emit('ratio-change', {
   ratioX: window.share.ratioX,
   ratioY: window.share.ratioY
 });
}
function resizeWidth() {
 var ratio = window.share.ratioX = window.share.ratioY = $(window).width()/(window.screen.width||$('body').width());
 $('body').css({
   transform: "scale("+ratio+")",
   transformOrigin: "left top",
   backgroundSize: "100%"
 });
}
function resizeCenter() {
 if(!window.screen.height||!window.screen.width) return resizeCenterBak();
 var ratio = window.share.ratioX = window.share.ratioY = $(window).height()/window.screen.height;
 $('body').css({
   transform: "scale("+ratio+")",
   transformOrigin: "left top",
   backgroundSize: 100*(window.screen.width/$(window).width() * ratio)+"%" + ' 100%',
   backgroundPosition: ($(window).width()-$('body').width()*ratio)/2+"px top",
   marginLeft: ($(window).width()-$('body').width()*ratio)/2
 });
}
function resizeFull() {
 if(!window.screen.height||!window.screen.width) return resizeFullBak();
 var ratioX = window.share.ratioX = $(window).width()/window.screen.width;
 var ratioY = window.share.ratioY = $(window).height()/window.screen.height;
 $('body').css({
   transform: "scale("+ratioX+", "+ratioY+")",
   transformOrigin: "left top",
   backgroundSize: "100% 100%",
 });

}

function resizeCenterBak() {
 var ratioX = $(window).width()/$('body').width();
 var ratioY = $(window).height()/$('body').height();
 var ratio = window.share.ratioX = window.share.ratioY = Math.min(ratioX, ratioY);
 $('body').css({
   transform: "scale("+ratio+")",
   transformOrigin: "left top",
   backgroundSize: (1/ratioX)*100*ratio+"%",
   backgroundPosition: ($(window).width()-$('body').width()*ratio)/2+"px top",
   marginLeft: ($(window).width()-$('body').width()*ratio)/2
 });
}
function resizeFullBak() {
 var ratioX = window.share.ratioX = $(window).width()/$('body').width();
 var ratioY = window.share.ratioY = $(window).height()/$('body').height();
 $('body').css({
   transform: "scale("+ratioX+", "+ratioY+")",
   transformOrigin: "left top",
   backgroundSize: "100% "+ratioY*100+"%",
 });
}
}
