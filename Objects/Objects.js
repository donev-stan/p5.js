// RGB Colors
var red = 255;
var green = 250;
var blue = 250;


function setup() {
  createCanvas(950, 950);
  background(230, 50, 120);  
  frameRate(2400);
}

// Object circle with it's properties

var firstCircle = {
  x: 100,
  y: 200,
  diameter: 50,
  speedX: 4,
  speedY: 6
};

var secondCircle = {
    x: 200,
    y: 100,
    diameter: 50,
    speedX: 3,
    speedY: 8
};


function draw() {
  background(red, green, blue);
  
  ellipse(firstCircle.x, firstCircle.y, firstCircle.diameter, firstCircle.diameter);
  firstCircle.x += firstCircle.speedX;
  firstCircle.y += firstCircle.speedY;
  
  ellipse(secondCircle.x, secondCircle.y, secondCircle.diameter, secondCircle.diameter);
  secondCircle.y += secondCircle.speedY;
  secondCircle.x += secondCircle.speedX;
  
  // first circle conditions
  if(firstCircle.x + firstCircle.diameter >= this.width + 20 || firstCircle.x <= 25){
    firstCircle.speedX *= -1;
  }
  if(firstCircle.y + firstCircle.diameter >= this.height + 15 || firstCircle.y <= 30){
    firstCircle.speedY *= -1;
  }
  
  // second circle conditions
  if(secondCircle.x + secondCircle.diameter >= this.width + 20 || secondCircle.x <= 25){
    secondCircle.speedX *= -1;
  }
   if(secondCircle.y + secondCircle.diameter>= this.height + 15 || secondCircle.y <= 30){
    secondCircle.speedY *= -1;
  }
}

function mouseClicked(){
  red = random(255);
  green = random(255);
  blue = random(255);
  //background(random(255), random(255), random(255));  
}
