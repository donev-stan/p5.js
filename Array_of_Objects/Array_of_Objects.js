var bubbles = [];

function setup() {
  createCanvas(950, 950);
  frameRate(2400);
  
  for(var i=0; i<50; i++){
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(0);
  for(var i = 0; i < bubbles.length; i++){
     bubbles[i].move();
     bubbles[i].display(); 
  }
}

//Constructor Function
function Bubble(){
  this.x = random(0, width);
  this.y = random(0, height);

  this.display = function(){
    stroke(255);  // Sets the color used to draw lines and borders around shapes. 
    noFill(); // Disables filling geometry. 
    ellipse(this.x, this.y, 24, 24);
  };

  this.move = function(){
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };
}
