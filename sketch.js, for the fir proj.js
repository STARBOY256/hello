var box
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background("blue");
if(keyIsDown(RIGHT_ARROW)) {
  background("red")
}
if(keyIsDown(LEFT_ARROW)) {
  background("yellow")
}


if(keyIsDown(UP_ARROW)) {
  box.position.y = box.position.y - 5;
  background("green")
}
if(keyIsDown(DOWN_ARROW)) {
  box.position.y = box.position.y + 5;
  background("black")
}
drawSprites();
}




