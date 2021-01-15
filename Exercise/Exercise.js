var x1,x2,y1,y2;

function setup() {
  createCanvas(950,950);
  
  //Setup Stem
  background(255);
  stroke(0,255,0);
  strokeWeight(15);
  
  //Position Stem
  x1 = width/2;
  y1 = height;
  x2 = x1;
  y2 = y1-200;
  
  //Frawing Stem
  line(x1,y1,x2,y2);
  
  
  //Setup Leaves
  
  
  strokeWeight(2);
  for(var i = 0; i < 3; i++){
    noStroke();
    //stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    triangle(x2, y2, x2 - random(200), y2 - random(500), x2 + random(200), y2 - random(200));
  }
}  


function draw() {
  
}
