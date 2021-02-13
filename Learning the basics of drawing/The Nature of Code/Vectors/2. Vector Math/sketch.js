let pos;

function setup() {
  createCanvas(780, 720);
  
  walker = new Walker(20, this.height - 20);
  background(0);
}

function draw() {
  walker.show();
  walker.update();
}