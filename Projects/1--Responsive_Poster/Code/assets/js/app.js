var DateTime = luxon.DateTime,
    localDateTime = DateTime.local(),
    Info = luxon.Info;

var electionYear = 2018,
    electionMonth = 11,
    electionDay = 6,
    electionMonthLong = {month: 'long'},
    electionDate = DateTime.local(electionYear, electionMonth, electionDay);

var months = Info.months('long', {locale: 'en'}),
    totalDays = localDateTime.daysInMonth;

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

  newElement.innerHTML = months[i];

  if (electionMonth == i) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = newElement.innerHTML += ".";

  } else if (i+1 < localDateTime.month) {
    newElement.classList.add("u-font--gray");

  } else if (i+1 == localDateTime.month) {
    newElement.classList.add("current-date");

  } else {
    // else
  }

  $('.months').append(newElement);
}

for (var i = 1; i <= totalDays; i++) {
  var newElement = document.createElement('p');
  newElement.innerHTML = i;

  if (i == electionDate.day) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = newElement.innerHTML += ".";

  } else if (i < localDateTime.day) {
    newElement.classList.add("u-font--gray");

  } else if (i == localDateTime.day) {
    newElement.classList.add("current-date");

  } else {
    // Else
  }

  $('.days').append(newElement);
}

for (var i = 1; i <= months.length; i++) {
  var newElement = document.createElement('p');
  newElement.innerHTML = "Participate,";

  if ((parseInt(months.indexOf(electionDate.monthLong)) + 1) == i) {
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.innerHTML = "Vote.";

  } else if (i < localDateTime.month) {
    newElement.classList.add("u-font--gray");

  } else if (i > localDateTime.month && i !== 12) {

  } else if (i == 12) {
    newElement.innerHTML = "Participate";

  } else {
    newElement.classList.add("current-date");
  }

  $('.actions').append(newElement);
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
