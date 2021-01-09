var pot = {
  x: 100,
  y: 50
};

var colour = {
  red: 255,
  green: 0,
  blue: 0
};

function setup() {
  createCanvas(955, 955);
  background(0);
}


function draw() {
  
  noStroke();
  colour.red = map(mouseX, 0, this.width, 0, 255);
  colour.green = 0;
  colour.blue = map(mouseY, 0, this.width, 0, 255);
  
  pot.x = random(0, this.width);
  pot.y = random(0, this.height);
  
  fill(colour.red, colour.green, colour.blue);
  ellipse(pot.x, pot.y, 24, 24);
}

function mousePressed(){
  background(colour.red, colour.green, colour.blue);
  
  
}
