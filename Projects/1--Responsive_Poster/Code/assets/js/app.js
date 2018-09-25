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

function setLongVoteDate (e) {
  var longformDate = Object.assign({ month: 'long', day: 'numeric' });
  $("."+e).text(electionDate.toLocaleString(longformDate));
}

setLongVoteDate('footer-vote-date');
setLongVoteDate('tagline-date-target');
setLongVoteDate('tiny-tagline-date');


for (var i = 0; i < months.length; i++) {
  var electionMonth = parseInt(months.indexOf(electionDate.monthLong));
  var newElement = document.createElement('p');

  if (electionMonth == i) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = months[i] + ".";
    $('.months').append(newElement);
  } else if (i+1 < localDateTime.month) {
    newElement.classList.add("u-font--gray");
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  } else if (i+1 == localDateTime.month) {
    newElement.classList.add("current-date");
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  } else {
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  }
}

for (var i = 1; i <= totalDays; i++) {
  var newElement = document.createElement('p');

  if (i == electionDate.day) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = i + ".";
    $('.days').append(newElement);
  } else if (i < localDateTime.day) {
    newElement.classList.add("u-font--gray");
    newElement.innerHTML = i;
    $('.days').append(newElement);
  } else if (i == localDateTime.day) {
    newElement.classList.add("current-date");
    newElement.innerHTML = i;
    $('.days').append(newElement);
  } else {
    newElement.innerHTML = i;
    $('.days').append(newElement);
  }
}

for (var i = 1; i <= months.length; i++) {
  var newElement = document.createElement('p');

  if ((parseInt(months.indexOf(electionDate.monthLong)) + 1) == i) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = "Vote.";
    $('.actions').append(newElement);
  } else if (i < localDateTime.month) {
    newElement.classList.add("u-font--gray");
    newElement.innerHTML = "Participate,";
    $('.actions').append(newElement);
  } else if (i > localDateTime.month && i !== 12) {
    newElement.innerHTML = "Participate,";
    $('.actions').append(newElement);
  } else if (i == 12) {
    newElement.innerHTML = "Participate";
    $('.actions').append(newElement);
  } else {
    newElement.classList.add("current-date");
    newElement.innerHTML = "Participate,";
    $('.actions').append(newElement);
  }
}

// also, maybe a more efficient way of writing the above for loops is as while loops:
// while (var i = 1; i <= 12; i++) {
//   newElement.classList.add("u-font--gray");
//   if (i === (parseInt(months.indexOf(electionDate.monthLong)) + 1)) {
//     console.log("We've hit the current date");
//     newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
//     break;
//   }
//   // every element after this in the array will not receive a class from this function.
// }
