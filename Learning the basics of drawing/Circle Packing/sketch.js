let bubbles = [];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(0);

  const newB = newBubble();
  if (newB != null) bubbles.push(newB);
  if (bubbles.length > 999) noLoop();

  for (const bubble of bubbles) {
    if (bubble.growing) {
      if (bubble.edgesTouch()) bubble.growing = false;
      else {
        for (const otherB of bubbles) {
          if (bubble != otherB) {
            const distance = dist(bubble.x, bubble.y, otherB.x, otherB.y);
            if (distance - 2 < bubble.radius + otherB.radius) {
              bubble.growing = false;
              break;
            }
          }
        }
      }
    }
    bubble.show();
    bubble.grow();
  }
}

function newBubble() {
  const x = random(width);
  const y = random(height);

  let validToDraw = true;
  for (const bubble of bubbles) {
    const distance = dist(x, y, bubble.x, bubble.y);

    if (distance - 2 < bubble.radius) {
      validToDraw = false;
      break;
    }
  }

  if (validToDraw) return new Bubble(x, y);
  else return null;
}