function setup() {
     createCanvas(400, 800);
     background(0);
     frameRate(8);
     noFill();

}
function draw() {
     stroke(random(255));
     var cpX1 = random(0, width);
     var cpY1 = random(height);
     var cpX2 = random(0, width);
     var cpY2 = random(height);

     for (var i = 1; i < 3; i++) {
       beginShape();
       vertex(width/2, height-10);
       bezierVertex(cpX1, cpY1, cpX2, cpY2, width/2, 10);
       endShape();
     }
}
