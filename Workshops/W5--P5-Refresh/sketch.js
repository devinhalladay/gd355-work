function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  eWidth = 100;
  cx = 100;
  cy = 360;
}

function draw() {
  if (mouseIsPressed){
    eWidth = 60;
    ellipse(mouseX, mouseY, eWidth);
  }
  else {
    eWidth = 100;
  }
  // background(255);
  fill(0);

  // stroke(0, 255, 0);
  // beginShape();
  // vertex(0, mouseX);
  // vertex(width, mouseY);
  // endShape();
  // ellipse(mouseX, mouseY, eWidth);

  quad(250, 250, 400, 400, 250, 450, 200, 400);

  // line(width/2, height/2, mouseX, mouseY);
  stroke(255, 0, 0);
  strokeWeight(2);
  line(mouseX, mouseY, pmouseX, pmouseY);

  noFill();
  stroke(255);
  strokeWeight(1);
  // rect(0, 0, mouseX, mouseY)

  fill(0, 0, 255);
  ellipse(cx, cy, 20, 20);

  beginShape();
  vertex(50, 50);
  vertex(100, 200);
  vertex(100, 400);
  vertex(40, 320);
  vertex(20, 200);
  endShape();
}
