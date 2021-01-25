$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});


$('.btn-expand-collapse').click(function(e) {
  $('.navbar-primary').toggleClass('collapsed');
$('.body-wrapper').toggleClass('nav-min');

});
