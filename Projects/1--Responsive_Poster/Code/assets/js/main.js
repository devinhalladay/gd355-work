// Arrow animation controllers
var ctaArrowLine = document.querySelector("#cta-arrow-line");
var ctaArrowChevron = document.querySelector("#cta-arrow-chevron");
var ctaArrowContainer = document.querySelector("#cta");

var taglineArrowLine = document.querySelector("#tagline-arrow-line");
var taglineArrowChevron = document.querySelector("#tagline-arrow-chevron");
var taglineArrowContainer = document.querySelector("#tagline-cta");

var tinyTaglineArrowLine = document.querySelector("#tiny-tagline-arrow-line");
var tinyTaglineArrowChevron = document.querySelector("#tiny-tagline-arrow-chevron");
var tinyTaglineArrowContainer = document.querySelector("#tiny-tagline-cta");

// CTA arrow
ctaArrowContainer.onmouseover = function () {
  ctaArrowChevron.classList.remove("anim-chevron--out");
  ctaArrowLine.classList.remove("anim-line--out");
  ctaArrowChevron.classList.add("anim-chevron--in");
  ctaArrowLine.classList.add("anim-line--in");
};

ctaArrowContainer.onmouseout = function () {
  ctaArrowChevron.classList.remove("anim-chevron--in");
  ctaArrowLine.classList.remove("anim-line--in");
  ctaArrowChevron.classList.add("anim-chevron--out");
  ctaArrowLine.classList.add("anim-line--out");
};

//Tagline Arrow
taglineArrowContainer.onmouseover = function () {
  taglineArrowChevron.classList.remove("anim-chevron--out");
  taglineArrowLine.classList.remove("anim-line--out");
  taglineArrowChevron.classList.add("anim-chevron--in");
  taglineArrowLine.classList.add("anim-line--in");
};

taglineArrowContainer.onmouseout = function () {
  taglineArrowChevron.classList.remove("anim-chevron--in");
  taglineArrowLine.classList.remove("anim-line--in");
  taglineArrowChevron.classList.add("anim-chevron--out");
  taglineArrowLine.classList.add("anim-line--out");
};

//Tiny Tagline Arrow
tinyTaglineArrowContainer.onmouseover = function () {
  tinyTaglineArrowChevron.classList.remove("anim-chevron--out");
  tinyTaglineArrowLine.classList.remove("anim-line--out");
  tinyTaglineArrowChevron.classList.add("anim-chevron--in");
  tinyTaglineArrowLine.classList.add("anim-line--in");
};

tinyTaglineArrowContainer.onmouseout = function () {
  tinyTaglineArrowChevron.classList.remove("anim-chevron--in");
  tinyTaglineArrowLine.classList.remove("anim-line--in");
  tinyTaglineArrowChevron.classList.add("anim-chevron--out");
  tinyTaglineArrowLine.classList.add("anim-line--out");
};




var DateTime = luxon.DateTime;
var localDateTime = DateTime.local()
var Info = luxon.Info;

var electionYear = 2018,
    electionMonth = 11,
    electionDay = 6,
    electionMonthLong = {month: 'long'};

var electionDate = DateTime.local(electionYear, electionMonth, electionDay);

var months = Info.months('long', {locale: 'en'});
var totalDays = localDateTime.daysInMonth;

for (var i = 0; i < months.length; i++) {
  if (months[i-1] == electionDate.monthLong) {
    console.log("Match: " + months[i] + " and " + electionDate.monthLong);

    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    var newElement = document.createElement('p');
    newElement.id = months[i];
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  } else {
    // console.log('no match');
    var newElement = document.createElement('p');
    newElement.id = months[i];
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  }
}

for (var i = 1; i <= totalDays; i++) {
  if (i == electionDate.day) {
    console.log("Match: " + totalDays[i] + " and " + electionDate.day);
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.id = i;
    newElement.innerHTML = i;
    $('.days').append(newElement);
  } else {
    var newElement = document.createElement('p');
    newElement.id = i;
    newElement.innerHTML = i;
    $('.days').append(newElement);
  }
}

for (var i = 1; i <= months.length; i++) {
  // var newElement = document.createElement('p');
  // newElement.id = i;
  // newElement.innerHTML = "Participate";
  // $('.actions').append(newElement);

  console.log(electionDate.month + " " + (parseInt(months.indexOf(electionDate.monthLong)) + 1) + " " + electionDate.month);

  if ((parseInt(months.indexOf(electionDate.monthLong)) + 1) == i) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.id = i;
    newElement.innerHTML = "Participate";
    $('.actions').append(newElement);
  } elsif {
    var newElement = document.createElement('p');
    newElement.id = i;
    newElement.innerHTML = "Participate";
    $('.actions').append(newElement);
  }
}


// elsif (parseInt(months.indexOf(electionDate.monthLong)) < i {
//   newElement.classList.add("u-font--gray")
// }
