var degree = 0;

function rotateBallots() {
  $('.ballot').each(function() {
    plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    randAngle = Math.floor(Math.random()*70+50) * plusOrMinus;

    degree += randAngle;

    $('.ballot').eq(Math.floor(Math.random()*$('.ballot').length)).addClass("u-font--serif");

    $(this).css({
      // 'transform': 'rotate('+ degree +'deg)',
      'top': '3em',
      'left': Math.random() * ($('.ballots').width() - $(this).width()),
      'transform': `scale(${getRandomArbitrary(0.4, 1)})`
      // 'bottom': Math.random() * ($('.ballots').height() - $(this).height())
    });
  });
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

rotateBallots();

// $( window ).resize(function() {
//   rotateBallots();
// });


// Arrow animation
var arrowLine = $('.arrow-line');
var arrowChevron = $('.arrow-chevron');

$('.cta').mouseenter(function() {
  arrowChevron.removeClass("anim-chevron--out");
  arrowLine.removeClass("anim-line--out");
  arrowChevron.addClass("anim-chevron--in");
  arrowLine.addClass("anim-line--in");
  console.log('mousein');
});

$('.cta').mouseout(function() {
  arrowChevron.removeClass("anim-chevron--in");
  arrowLine.removeClass("anim-line--in");
  arrowChevron.addClass("anim-chevron--out");
  arrowLine.addClass("anim-line--out");
  console.log('mouseout');
});
