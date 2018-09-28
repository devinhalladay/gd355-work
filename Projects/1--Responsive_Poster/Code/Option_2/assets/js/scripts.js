var numBallots = 30;
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
  var $ballot = $("<div>", {
    text: "Vote!",
    "class": `ballot ballot-${i}`
  });

  $(".ballots").append($ballot);
}

$('.ballot').each(function() {
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  randAngle = Math.floor(Math.random()*70+50) * plusOrMinus;

  degree += randAngle;

  $(this).css({
    'transform': 'rotate('+ degree +'deg)',
    'left': Math.random() * ($('.ballots').width() - $(this).width()),
    'bottom': Math.random() * ($('.ballots').height() - $(this).height())
  });
});

var $yourBallot = $("<div>", {
  text: "Vote!",
  "class": `ballot ballot-yours`
});

$(".ballots").append($yourBallot);

$('.ballot-yours').each(function() {
  plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  randAngle = Math.floor(Math.random()*70+50) * plusOrMinus;

  degree += randAngle;

  $(this).css({
    'transform': 'rotate('+ degree +'deg)',
    'left': Math.random() * ($('.ballots').width() - $(this).width()),
    'bottom': Math.random() * ($('.ballots').height() - $(this).height())
  });
});


// Arrow animation
var arrowLine = $('.arrow-line');
var arrowChevron = $('.cta-arrow-chevron');
var arrowContainer = $('.cta');

arrowContainer.onmouseover = function () {
  arrowChevron.classList.remove("anim-chevron--out");
  arrowLine.classList.remove("anim-line--out");
  arrowChevron.classList.add("anim-chevron--in");
  arrowLine.classList.add("anim-line--in");
};

arrowContainer.onmouseout = function () {
  arrowChevron.classList.remove("anim-chevron--in");
  arrowLine.classList.remove("anim-line--in");
  arrowChevron.classList.add("anim-chevron--out");
  arrowLine.classList.add("anim-line--out");
};
