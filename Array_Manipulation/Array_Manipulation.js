var bubbles = [];

function setup() {
  createCanvas(950, 950);
}

function draw() {
  background(0);
  
  for(var i = 0; i < bubbles.length; i++){
     bubbles[i].move();
     bubbles[i].display(); 
  }
  
  bubbles.push(new Bubble(width/2, height/2)); 
  
  if(bubbles.length > 30){
    bubbles.splice(0, 1);
  }
}

//Constructor Function
function Bubble(x, y){
  //this.x = random(0, width);
  //this.y = random(0, height);
  
  this.x = x;
  this.y = y;
  
  this.display = function(){
    stroke(0); 
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y, 40, 40);
  };

  this.move = function(){
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  };
}

//function mousePressed(){
// bubbles.push(new Bubble(mouseX, mouseY)); 
//}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX, mouseY)); 
}
