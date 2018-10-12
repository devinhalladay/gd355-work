var halfWidth;
var c;

function setup() {
  createCanvas(680, 580);
  background(255);
  strokeWeight(8);
  stroke(43, 165, 222);

  halfWidth = width/2;
  c = 0;
  colorMode(HSB);

  noFill();
  bezier(465,293,464,131,222,136,214,293);
}

function draw() {
  fill(255);
  strokeWeight(8);
  stroke(197, 81, 86);

  // Body
  rect(halfWidth-200, height-80, 400, 100, 60, 60, 0, 0);

  push();
  noStroke();
  fill(197, 81, 86);
  textSize(25);
  textAlign(CENTER);
  text('Draw my hair!', width/2, height-20);
  pop();

  // Neck
  line(halfWidth-40, height-80, halfWidth-35, height-120);
  line(halfWidth+40, height-80, halfWidth+35, height-120);

  // Collar
  push();
  angleMode(DEGREES);
  translate(halfWidth-50, height-100);
  rotate(20);
  rect(0, 0, 50, 25);
  pop();
  push();
  angleMode(DEGREES);
  translate(halfWidth+2, height-84);
  rotate(-20);
  rect(0, 0, 50, 25);
  pop();

  // Face
  // bezier(473,329,457,521,227,525,220,324);
  // bezier(467,318,454,515,224,519,217,318);
  bezier(467,318,439,516,240,520,217,318);


  // Mouth
  bezier(386,399,373,434,312,440,296,399);

  // Glasses
  line(halfWidth-85, height-270, halfWidth-135, height-290);
  line(halfWidth+85, height-270, halfWidth+135, height-290);
  line(halfWidth-23 , height-270, halfWidth+23, height-270);

  // Eyes
  push();
  fill(255);
  ellipse(halfWidth-55, height-260, 70);
  ellipse(halfWidth+55, height-260, 70);
  pop();
  push();
  fill(197, 81, 86);
  ellipse(halfWidth-55, height-265, 10);
  ellipse(halfWidth+55, height-265, 10);
  pop();

  // Nose
  push();
  noFill();
  bezier(346,308,319,357,293,385,348,378);
  pop();

  push();
  noFill();
  // Left Ear
  bezier(214,294,185,265,174,348,217,327);
  // Right Ear
  bezier(465,297,498,255,516,345,468,325);
  pop();

  // Left brow
  bezier(324,279,294,261,276,265,254,277);
  // Right brow
  bezier(431,280,401,262,383,266,361,278);

  if (c >= 360) {
    c = 0;
  } else {
    c += 1;
  }

  // Draw my hair!
  noFill();
  stroke(c, 255, 255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
