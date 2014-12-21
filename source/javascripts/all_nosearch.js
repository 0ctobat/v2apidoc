//= require_tree ./lib
//= require_tree ./app
//= stub ./app/search.js
//= stub ./lib/lunr.js

$(window).scroll(function() {
  var height = $(window).scrollTop();

  if(height > 87) {
    $('.tocify-wrapper').css('position', 'fixed');
    $('.page-wrapper .lang-selector').css('position', 'fixed');
    $('.tocify-wrapper').css('margin-top', '0');
    $('.page-wrapper').css('margin-top', '0');
  } else {
    $('.tocify-wrapper').css('position', 'absolute');
    $('.page-wrapper .lang-selector').css('position', 'absolute');
    $('.tocify-wrapper').css('margin-top', '87px');
    $('.page-wrapper').css('margin-top', '87px');
  }

});