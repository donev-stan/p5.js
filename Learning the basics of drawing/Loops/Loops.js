function setup() {
   createCanvas(950, 950);
}


function draw() {
  background(0);
  strokeWeight(4); // Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of pixels.
  stroke(255); // Sets the color used to draw lines and borders around shapes.
  
  var x = 50;
  
  while(x < this.width){
    ellipse(x, 200, 25, 25);
    x = x + 50;
  }
  
  for(var x1 = 50; x1 < this.width; x1+=50){
    ellipse(x1, 400, 25, 25);
  }
  
}
