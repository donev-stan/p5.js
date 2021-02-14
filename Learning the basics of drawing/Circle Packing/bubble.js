class Bubble {
  
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.growing = true;
  }
  
  grow() {
    if (this.growing) this.radius += 0.5;
  }
  
  edgesTouch() {
    const offset = 2;
    const rightTouch = this.x + this.radius > (width + offset);
    const leftTouch = this.x - this.radius < offset;
    const upTouch = this.y + this.radius > (height + offset);
    const lowTouch = this.y - this.radius < offset;
    
    return (rightTouch || leftTouch || upTouch || lowTouch);
  }
  
  show() {
    noFill();
    stroke(255);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
}