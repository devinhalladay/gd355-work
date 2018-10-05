function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(125, 196, 247);
}

function draw() {
  fill(255);
  strokeWeight(2);

  // Arms
  line(width/2, (height/2+100), (width/2+200), (height/2-40));
  line(width/2, (height/2+100), (width/2-200), (height/2-40));

  // Body
  ellipse(width/2, (height/2+100), 300);

  // Head
  ellipse(width/2, (height/2-125), 150);

  // Eyes
  fill(0);
  ellipse((width/2-30), (height/2-140), 15);
  ellipse((width/2+30), (height/2-140), 15);

  // Buttons
  ellipse(width/2, (height/2+20), 20);
  ellipse(width/2, (height/2+80), 20);
  ellipse(width/2, (height/2+140), 20);

  // Hat
  rect((width/2 - 80), (height/2 - 190), 160, 10);
  rect((width/2 - 60), (height/2 - 270), 120, 80);

  // Nose
  fill(255, 119, 61);
  triangle((width/2 - 10), (height/2-100), (width/2 - 10), (height/2-120), (width/2+50), (height/2-110));

  // Mouth
  noFill();
  arc(width/2, (height/2-90), 50, 40, 0, PI);
}
