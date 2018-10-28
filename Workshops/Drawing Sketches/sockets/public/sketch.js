// Based on Daniel Shiffman's tutorial on WebSockets

var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  socket = io.connect('http://localhost:3000');
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
}

function draw() {

}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos);

  // Make a little object with x and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}
