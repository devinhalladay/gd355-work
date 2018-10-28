var r = 255;
var b = 80;
var g = 100;

let img;

function preload() {
  img = loadImage('/assets/img.png')
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER);
}

function draw() {
  image(img, mouseX, mouseY,
    200+sin(frameCount*0.1)*100,
    200+cos(frameCount*0.1)*100);

  if (mouseIsPressed) {
    filter(INVERT)
  }
}
