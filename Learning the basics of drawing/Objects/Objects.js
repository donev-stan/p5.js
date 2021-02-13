// RGB Colors
var red = 255;
var green = 250;
var blue = 250;

function setup() {
  createCanvas(950, 955);
  frameRate(2400);
}

var dotOne = {
  x: 400, 
  y: 100, 
  diameter: 50, 
  speedX: 4, 
  speedY: 6  
};

var dotTwo = {
  x: 50, 
  y: 800, 
  diameter: 50, 
  speedX: 3, 
  speedY: 8
};
  
function draw() {
  move();
  bounce();
  display();
}

function move() {
  // first ball
  dotOne.x += dotOne.speedX;
  //dotOne.y += dotOne.speedY;

  // second ball
  dotTwo.y = mouseY;
  dotTwo.x = mouseX;
}

function bounce() {
  // first ball
  if (dotOne.x + dotOne.diameter >= this.width + 20 || dotOne.x <= 25) {
    dotOne.speedX *= -1;
  }
  if (dotOne.y + dotOne.diameter >= this.height + 15 || dotOne.y <= 30) {
    dotOne.y = 100;
    //dotOne.speedY *= -1;
  }

  // second ball
  if (dotTwo.x + dotTwo.diameter >= this.width + 20 || dotTwo.x <= 25) {
    dotTwo.speedX *= -1;
  }
  if (dotTwo.y + dotTwo.diameter>= this.height + 15 || dotTwo.y <= 30) {
    dotTwo.speedY *= -1;
  }
}

function display() {
  ellipseMode(CENTER);
  background(red, green, blue);
  red = map(dotOne.x, 0, this.width, 0, 255); // [0-255] --- [0-950]
  green = map(dotTwo.x, 0, this.width, 0, 255);
  blue = map(dotOne.y, 0, this.width, 0, 255);

  fill(green, red, blue);
  ellipse(dotOne.x, dotOne.y, dotOne.diameter, dotOne.diameter);
  
  fill(blue, red, green);
  ellipse(dotTwo.x, dotTwo.y, dotTwo.diameter, dotTwo.diameter);
}

function mouseClicked() {

    //dotOne.speedX *= -1;
    dotOne.y += 400;
 
 
}
