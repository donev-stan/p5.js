// Source: https://10print.org/

// Things to change and try:
let spacing = 30;
let probability = 0.5; // 0 - 1
let drawingSpeed = 500;
let canvasSizeX = 800;
let canvasSizeY = 700;
let slashTransparency = 255; // 0 - 255

// Click on canvas to restart


//-----------------------------
let x = 0;
let y = 0;
// to do: transate instead of x and y offsets

function setup() {
  createCanvas(canvasSizeX, canvasSizeY);
  background(0);
  frameRate(drawingSpeed);
}

function draw() {
  stroke(slashTransparency);
  
  if (random(1) < probability) {
    line(x, y, x + spacing, y + spacing);
  }
  else {
    line(x, y + spacing, x + spacing, y);  
  }
  
  // Position drawing logic
  x += spacing;
  if (x > width) { 
    x = 0;
    y += spacing;
    if(y > height) noLoop();
  }
}

// Reset (start over)
function mousePressed(){
  x = 0;
  y = 0;
  
  background(0);
  loop();
}