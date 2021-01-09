// var col = map(mouseX, minValue, maxValue, minValue, maxValue);

var red = 0;
var blue = 255;

function setup() {
  createCanvas(600, 400);
  
}


function draw() {
  red = map(mouseX, 0, this.width, 0, 255); // [0-255] color range
  blue = map(mouseX, 0, this.width, 255, 0);
  background(red, 0, blue);
  
  //ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}
