var greetings = ["Hello", "Sup", "Hey", "Hi", "Howdy"]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	console.log(greet("Devin"));
}

function greet(name) {
	var greeting = greetings[Math.floor(Math.random()*greetings.length)];
	var hi = `${greeting}, ${name}.`;
	var time = ` It is ${hour()}:${minute()} now.`
	return hi + time;
}
