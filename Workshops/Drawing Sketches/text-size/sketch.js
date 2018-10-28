var textSizeStore;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  var textSizeStore = Math.round( (12 + (mouseX / width) * 160) * 10 ) / 10;
  var textLeadingStore = Math.round( (20 + (mouseY / height) * 120) * 10 ) / 10;
  textSize(textSizeStore);
  textLeading(textLeadingStore);
  text(`Arial ${textSizeStore}px /\n${textLeadingStore}px`, 100, 100, windowWidth-100, windowHeight-100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
