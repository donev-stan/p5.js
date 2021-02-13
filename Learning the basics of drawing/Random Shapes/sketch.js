function setup() {
  createCanvas(750, 700);
  background(0);

  frameRate(3);
}

let bubble; //id = 0
let liniq;
let kvadrat;

function draw() {
  let shapeID = floor(random(2));
  createShape(shapeID);
}

function createShape(shapeID) {
  let red = random(255);
  let green = random(255);
  let blue = random(255);

  let x = random(width);
  let y = random(height)

  switch (shapeID) {
    case 0:
      let size = random(3, 150);
      bubble = new Bubble(x, y, size, red, green, blue);
      bubble.draw();
      break;

    case 1:
      let x2 = random(width);
      let y2 = random(height);
      let lineWidth = random(1, 10);
      liniq = new Line(x, y, x2, y2, red, green, blue, lineWidth);
      liniq.draw();
      break;
  }
}