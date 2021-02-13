class Walker {
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(1, -1);
  }
  
  update(){
    this.pos.add(this.vel);
  }
  
  show(){
    stroke(random(255), random(255), random(255));
    strokeWeight(5);
    //fill(random(255), random(255), random(255));
    ellipse(this.pos.x, this.pos.y, 32);
  }
}