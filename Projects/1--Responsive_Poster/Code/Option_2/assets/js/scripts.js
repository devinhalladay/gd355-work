var numBallots = 10;
var degree = 0;

//temp
var min_x = 0;
var max_x = $(document).width();
var min_y = 0;
var max_y = $(document).height()/2;
var rand_x=0;
var rand_y=0;
//temp


for (var i = 0; i < numBallots; i++) {
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  randAngle = Math.floor(Math.random()*70+50) * plusOrMinus;

  // rand_x = Math.round(min_x + ((max_x - min_x)*(Math.random() % 1)));
  // rand_y = Math.round(min_y + ((max_y - min_y)*(Math.random() % 1)));

  rand_x = Math.round(Math.random() * max_x) + 1
  rand_y = Math.round(Math.random() * max_y) + 1

  degree += randAngle;

  var $div = $("<div>", {
    text: "Vote!",
    "class": `ballot ballot-${i}`
  }).css({
    'transform': 'rotate('+ degree +'deg)',
    'left': rand_x,
    'top': rand_y
  });

  $(".ballots").append($div);
}


// Arrow animation
// var arrowLine = $('.arrow-line');
// var arrowChevron = $('.cta-arrow-chevron');
// var arrowContainer = $('.cta');
//
// arrowContainer.onmouseover = function () {
//   arrowChevron.classList.remove("anim-chevron--out");
//   arrowLine.classList.remove("anim-line--out");
//   arrowChevron.classList.add("anim-chevron--in");
//   arrowLine.classList.add("anim-line--in");
// };
//
// arrowContainer.onmouseout = function () {
//   arrowChevron.classList.remove("anim-chevron--in");
//   arrowLine.classList.remove("anim-line--in");
//   arrowChevron.classList.add("anim-chevron--out");
//   arrowLine.classList.add("anim-line--out");
// };
