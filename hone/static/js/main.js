$(document).ready(function() {

});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function prepareAsides() {
  $(".aside a.aside-header").click(function(event) {
    $(this).parents(".aside").toggleClass("aside-expanded");
    $(this).parents(".aside").children(".aside-body").slideToggle({ duration: 200 });
    event.preventDefault();
  });
}

$(document).ready(function() {
  $( '.swipebox' ).swipebox();
  $( '.swipebox-video' ).swipebox();
  prepareAsides();
});
