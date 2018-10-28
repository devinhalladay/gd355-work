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
  image(img, mouseX, mouseY, img.height/2, img.width/2)

  if (mouseIsPressed) {
    filter(INVERT)
  }
}
