var img;
var heading = "Billions\nMust\nDie";
var subtitle = "The earth belongs to itself.";

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255)
  img = loadImage("assets/_DSC1240.jpg");;
}

function draw() {
  // arc(width/2, height/2, 300, mouseY, PI, -PI/2);

  image(img, 0, 0, img.width/2, img.height/3);

  noStroke();
  fill(255);
  textSize(54);
  textLeading(60);
  textFont("Bespoke-P1dJ2dHo3q")
  text(heading, 374, 500);

  textSize(30);
  textLeading(32);
  textFont("Recession")
  text(subtitle, 380, 660);

  strokeWeight(1);
  stroke(255);
  fill(255, 255, 255, 80);

  beginShape();
  vertex(0, height);
  vertex(width/2, height/10);
  vertex(width/2, 0);
  vertex(0, 0);

  beginContour();
  vertex(380, 380);
  vertex(300, 380);
  vertex(300, 300);
  vertex(420, 300);
  vertex(420, 420);
  vertex(380, 420);
  endContour();

  endShape(CLOSE);

  beginShape();
  vertex(width, height);
  vertex(width/2, height/10);
  vertex(width/2, 0);
  vertex(0, 0);

  beginContour();
  vertex(width-380, height-380);
  vertex(width-300, height-380);
  vertex(width-300, height-300);
  vertex(width-420, height-300);
  vertex(width-420, height-420);
  vertex(width-380, height-420);
  endContour();

  endShape(CLOSE);

  stroke(255, 0, 0);
  strokeWeight(2);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
