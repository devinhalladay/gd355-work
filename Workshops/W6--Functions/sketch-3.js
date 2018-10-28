var circles = [];

function setup() {
  createCanvas(400, 400);

	for (var i=0; i<10; i++) {
    circles.push(new Jitter());
  }

	colorMode(HSB);
}

function draw() {
  background(255);
	strokeWeight(1);
	stroke(0);
	noFill();

// 	for (i = 0; i < 10; i++) {
// 		drawConcentricCircle(i*50, i+50, i, color(i*29));
// 	}

// 	for (i = 0; i < 10; i++) {
// 		drawConcentricCircle(i*50, i+200, 10-i, color(i*29));
// 	}

// 	for (i = 0; i < 10; i++) {
// 		drawConcentricCircle(i*50, i+350, i, color(i*29));
// 	}

	for (var i=0; i<circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(0, 360);
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    drawConcentricCircle(this.x, this.y, 1, color(this.diameter, 255, 255), 3);
  };
}

function drawConcentricCircle(x, y, sw, sc, n) {
	strokeWeight(sw);
	stroke(sc);

	for (i = 0; i <= n; i++) {
		ellipse(x, y, i*50, i*50);
	}

	// ellipse(x, y, 100, 100);
	// ellipse(x, y, 150, 150);
}
