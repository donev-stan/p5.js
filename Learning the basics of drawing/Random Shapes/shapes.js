class Bubble {
  constructor(x, y, size, red, green, blue) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  draw() {
    stroke(255);
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.size);
  }
}

class Line {
  constructor(x1, y1, x2, y2, red, green, blue, width) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    
    this.red = red;
    this.green = green;
    this.blue = blue;
    
    this.width = width;
  }

  draw() {
    strokeWeight(this.width);
    stroke(this.red, this.green, this.blue);
    line(this.x1, this.y1, this.x2, this.y2);
  }
}