var arrowLine = document.querySelector("#arrow-line");
var arrowChevron = document.querySelector("#arrow-chevron");
var arrowContainer = document.querySelector("#cta");

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
