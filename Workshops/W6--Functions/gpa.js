
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	console.log(getGPA(100, 100, 76));
}

function getGPA(a, b, c) {
	var sum = a + b + c;
	var average = sum / 3;
	var fin = map(average, 0, 100, 0, 4);
	return fin;
}
