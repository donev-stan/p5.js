var red = 255;
var green = 200;
var blue = 50;

function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
  
  frameRate(144);
}


function draw() {
  noStroke(); // Disables drawing the stroke (outline).
  fill(red, green, blue, 50);
  ellipse(mouseX, mouseY, 25, 25);
}

function mousePressed() {
  background(250, 250, 100); // When we press the mouse the background would be reset
  red = random(255);
  green = random(255);
  blue = random(255);
  
}
