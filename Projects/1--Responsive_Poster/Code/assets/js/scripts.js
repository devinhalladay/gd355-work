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

var voteDayCardArrowLine = document.querySelector("#vote-day-card-arrow-line");
var voteDayCardArrowChevron = document.querySelector("#vote-day-card-arrow-chevron");
var voteDayCardArrowContainer = document.querySelector("#vote-day-card-cta");

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

//Vote day card arrow
voteDayCardArrowContainer.onmouseover = function () {
  voteDayCardArrowChevron.classList.remove("anim-chevron--out");
  voteDayCardArrowLine.classList.remove("anim-line--out");
  voteDayCardArrowChevron.classList.add("anim-chevron--in");
  voteDayCardArrowLine.classList.add("anim-line--in");
};

voteDayCardArrowContainer.onmouseout = function () {
  voteDayCardArrowChevron.classList.remove("anim-chevron--in");
  voteDayCardArrowLine.classList.remove("anim-line--in");
  voteDayCardArrowChevron.classList.add("anim-chevron--out");
  voteDayCardArrowLine.classList.add("anim-line--out");
};


// $(document).ready(function () {
//   $('.ballot').throwable({
//     gravity:{x:1,y:Math.random()},
//     autostart: false,
//     bounce: .8,
//     collisionDectection: true
//   });
// });


// The star of every good animation
// var requestAnimationFrame = window.requestAnimationFrame ||
//                             window.mozRequestAnimationFrame ||
//                             window.webkitRequestAnimationFrame ||
//                             window.msRequestAnimationFrame;
//
// var transforms = ["transform",
//                   "msTransform",
//                   "webkitTransform",
//                   "mozTransform",
//                   "oTransform"];
//
// var transformProperty = getSupportedPropertyName(transforms);
//
// // Array to store our Ballot objects
// var ballots = [];
//
// // Global variables to store our browser's window size
// var browserWidth;
// var browserHeight;
//
// // Specify the number of ballots you want visible
// var numberOfBallots = 16;
//
// // Flag to reset the position of the ballots
// var resetPosition = false;
//
// //
// // It all starts here...
// //
// function setup() {
//     window.addEventListener("DOMContentLoaded", generateBallots, false);
//     window.addEventListener("resize", setResetFlag, false);
// }
// setup();
//
// //
// // Vendor prefix management
// //
// function getSupportedPropertyName(properties) {
//     for (var i = 0; i < properties.length; i++) {
//         if (typeof document.body.style[properties[i]] != "undefined") {
//             return properties[i];
//         }
//     }
//     return null;
// }
//
// //
// // Constructor for our Ballot object
// //
// function Ballot(element, speed, xPos, yPos) {
//
//     // set initial ballot properties
//     this.element = element;
//     this.speed = speed;
//     this.xPos = xPos;
//     this.yPos = yPos;
//
//     // declare variables used for ballot's motion
//     this.counter = 0;
//     this.sign = Math.random() < 0.5 ? 1 : -1;
//
//     // setting an initial size for our ballot
//     this.element.style.fontSize = 12 + Math.random() * 50 + "px";
// }
//
// //
// // The function responsible for actually moving our ballot
// //
// Ballot.prototype.update = function () {
//
//     // using some trigonometry to determine our x and y position
//     this.counter += this.speed / 5000;
//     this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
//     this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
//
//     // setting our ballot's position
//     setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
//
//     // if ballot goes below the browser window, move it back to the top
//     if (this.yPos > browserHeight) {
//         this.yPos = -50;
//     }
// }
//
// //
// // A performant way to set your ballot's position
// //
// function setTranslate3DTransform(element, xPosition, yPosition) {
//     var val = "translate3d(" + xPosition + "px, " + yPosition + "px" + ", 0)";
//     element.style[transformProperty] = val;
// }
//
// //
// // The function responsible for creating the ballot
// //
// function generateBallots() {
//
//     // get our ballot element from the DOM and store it
//     var originalBallot = document.querySelector(".ballot");
//
//     // access our ballot element's parent container
//     var ballotContainer = originalBallot.parentNode;
//
//     // get our browser's size
//     browserWidth = document.documentElement.clientWidth;
//     browserHeight = document.documentElement.clientHeight;
//
//     // create each individual ballot
//     for (var i = 0; i < numberOfBallots; i++) {
//
//         // clone our original ballot and add it to ballotContainer
//         var ballotClone = originalBallot.cloneNode(true);
//         ballotContainer.appendChild(ballotClone);
//
//         // set our ballot's initial position and related properties
//         var initialXPos = getPosition(50, browserWidth);
//         var initialYPos = getPosition(50, browserHeight);
//         var speed = 5+Math.random()*40;
//
//         // create our Ballot object
//         var ballotObject = new Ballot(ballotClone,
//                                             speed,
//                                             initialXPos,
//                                             initialYPos);
//         ballots.push(ballotObject);
//     }
//
//     // remove the original ballot because we no longer need it visible
//     ballotContainer.removeChild(originalBallot);
//
//     // call the moveBallots function every 30 milliseconds
//     moveBallots();
// }
//
// //
// // Responsible for moving each ballot by calling its update function
// //
// function moveBallots() {
//     for (var i = 0; i < ballots.length; i++) {
//         var ballot = ballots[i];
//         ballot.update();
//     }
//
//     // Reset the position of all the ballots to a new value
//     if (resetPosition) {
//         browserWidth = document.documentElement.clientWidth;
//         browserHeight = document.documentElement.clientHeight;
//
//         for (var i = 0; i < ballots.length; i++) {
//             var ballot = ballots[i];
//
//             ballot.xPos = getPosition(50, browserWidth);
//             ballot.yPos = getPosition(50, browserHeight);
//         }
//
//         resetPosition = false;
//     }
//
//     requestAnimationFrame(moveBallots);
// }
//
// //
// // This function returns a number between (maximum - offset) and (maximum + offset)
// //
// function getPosition(offset, size) {
//     return Math.round(-1*offset + Math.random() * (size+2*offset));
// }
//
// //
// // Trigger a reset of all the ballots' positions
// //
// function setResetFlag(e) {
//     resetPosition = true;
// }
