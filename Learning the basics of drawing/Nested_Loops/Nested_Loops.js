function setup() {
  createCanvas(950, 950);
}

function draw() {
  background(0);
  strokeWeight(4); // Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of pixels.
  stroke(255); // Sets the color used to draw lines and borders around shapes.
  
  for(var x = 50; x < this.width; x+=50){
     for(var y = 50; y < this.height; y+=50){
      fill(random(255), 0, random(255));
      ellipse(x, y, 25, 25);
    }
  }
}
