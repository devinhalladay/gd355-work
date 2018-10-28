function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

	drawRectX(0, 0, 110, 40, color(0, 0, 255), color(255, 255, 0));
	drawRectX(120, 200, 10, 30, color(255, 0, 0), color(0, 0, 255));
	drawRectX(width/2, height/2, 100, 100, color(255, 255, 0), color(0, 0, 255));
}

function drawRectX(x, y, w, h, c, lc) {
	fill(c);
	stroke(lc);
	rect(x, y, w, h);
	line(x, y, x+w, y+h);
	line(x+w, y, x, y+h);
}
