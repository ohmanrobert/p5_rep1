let num = 360;
let mx = [];
let my = [];

function setup() {
  createCanvas(1200, 900);
  noStroke();
  fill(255, 153);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(237, 34, 93);

  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    colorMode(HSB);
    fill(i/6, 255, 100);
    ellipse(mx[index]+cos((mx[index] - i)/20)*((num-i)/25), my[index]+cos((my[index] - i)/20)*((num-i)/25), i, i);
  }
}
