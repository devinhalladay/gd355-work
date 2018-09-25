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

  if (electionMonth == i) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.id = months[i];
    newElement.innerHTML = months[i] + ".";
    $('.months').append(newElement);
  } else if (i+1 < localDateTime.month) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--gray");
    newElement.id = months[i];
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  } else if (i+1 == localDateTime.month) {
    var newElement = document.createElement('p');
    newElement.classList.add("current-date");
    newElement.id = months[i];
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  } else {
    var newElement = document.createElement('p');
    newElement.id = months[i];
    newElement.innerHTML = months[i];
    $('.months').append(newElement);
  }
}

for (var i = 1; i <= totalDays; i++) {
  if (i == electionDate.day) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.id = i;
    newElement.innerHTML = i + ".";
    $('.days').append(newElement);
  } else if (i < localDateTime.day) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--gray");
    newElement.id = i;
    newElement.innerHTML = i;
    $('.days').append(newElement);
  } else if (i == localDateTime.day) {
    var newElement = document.createElement('p');
    newElement.classList.add("current-date");
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

  // console.log(electionDate.month + " " + (parseInt(months.indexOf(electionDate.monthLong)) + 1) + " " + electionDate.month);
  // console.log("Datetime month: " + localDateTime.month + " / current iteration: " + i);

  if ((parseInt(months.indexOf(electionDate.monthLong)) + 1) == i) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--color", "u-font--sans", "u-font--500");
    newElement.id = i;
    newElement.innerHTML = "Vote.";
    $('.actions').append(newElement);
  } else if (i < localDateTime.month) {
    var newElement = document.createElement('p');
    newElement.classList.add("u-font--gray");
    newElement.id = i;
    newElement.innerHTML = "Participate,";
    $('.actions').append(newElement);
  } else if (i > localDateTime.month && i !== 12) {
    var newElement = document.createElement('p');
    newElement.id = i;
    newElement.innerHTML = "Participate,";
    $('.actions').append(newElement);
  } else if (i == 12) {
    var newElement = document.createElement('p');
    newElement.id = i;
    newElement.innerHTML = "Participate";
    $('.actions').append(newElement);
  } else {
    var newElement = document.createElement('p');
    newElement.classList.add("current-date");
    newElement.id = i;
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
