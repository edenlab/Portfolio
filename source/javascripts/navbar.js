$(document).ready(function() {
  $(window).scroll(function () {
    var bannerHeight = $(".banner").height();
    if ($(window).scrollTop() > (bannerHeight - 10)) {
      $('.navbar-edenlab').removeClass('is-hidden');
    } else {
      $('.navbar-edenlab').addClass('is-hidden');
    }
  });

  var bannerHeight = $(".banner").height();
  if ($(window).scrollTop() > (bannerHeight - 10)) {
    $('.navbar-edenlab').removeClass('is-hidden');
  } else {
    $('.navbar-edenlab').addClass('is-hidden');
  }
});
