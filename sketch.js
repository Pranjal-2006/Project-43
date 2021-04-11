
function setup() {
  createCanvas(800,400);
  var h = createSprite(400, 200, 50, 50);
  h = hour();

  var m = createSprite(400,200,50,50);
   m = minute();

  var s = createSprite(400,200,50,50);
  s = second();

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}