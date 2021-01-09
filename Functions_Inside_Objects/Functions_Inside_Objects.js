// Not Working

function setup() {
  createCanvas(950, 950); 
  frameRate(2400);
}

var bubble = {
  x: 50, 
  y: 50, 
  diameter: 50, 
  speedX: 1, 
  speedY: 4,
  
  move: function(){
    this.x += this.speedX;
    this.y += this.speedY;
  }, 
  
  bounce: function(){
    if (this.x > this.width + 20 || this.x < 25) {
        this.speedX *= -1;
        println("bye bye X");
    }
    if (this.y > this.height + 15 || this.y < 30) {
        this.speedY *= -1;
         println("bye bye Y");
    } 
  },
  
   display: function(){
    //ellipseMode(CENTER);
    //background(red, green, blue);
    //red = map(dotOne.x, 0, this.width, 0, 255);
    //green = map(dotTwo.x, 0, this.width, 0, 255);
    //blue = map(dotOne.y, 0, this.width, 0, 255);

    //fill(green, red, blue);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};


function draw() {
  background(0); 

  bubble.move();
  bubble.bounce();
  bubble.display();
}
