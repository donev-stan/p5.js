//var xoff = 0;
//var xoffY = 10000;

var increment = 0.1;
var start = 0;

function setup() {
  createCanvas(400,400);
  
}


function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  
  
  var xoff = start;
  for(var x = 0; x < width; x++){
    stroke(255);
    //var y = random(height);
    var y = noise(xoff) * height;
    vertex(x, y);
     
    xoff += increment;
}
  
 
    start += increment;  
  endShape();
  
  //noLoop();
  
  //var x = map(noise(xoff), 0, 1, 0, width);
  //var y = map(noise(xoffY), 0, 1, 0, height);
  
  //xoff+= 0.01;
  //xoffY += 0.02;
  
  //ellipse(x, y, 24, 24);

}
