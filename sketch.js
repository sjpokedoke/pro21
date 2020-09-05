var thickness, wall;
var speed, weight, bullet, bulletimg;

function preload(){
  bulletimg = loadImage("bullet.png");
}
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  bullet.addImage("bulletimg", bulletimg);
  bullet.scale = 0.5;
  

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");

  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor = rgb(255,0,0);
      text("This wall is not strong enough", 800, 300);
      wall.height = 50;
    }
    if (damage<10&&damage>5){
      wall.shapeColor = rgb(0,255,0);
      text("This wall is strong", 800, 300);
    }
    if (damage<5){
      wall.shapeColor = rgb(0,255,0);
      text("This wall is very strong", 800, 300);
    }
  }

  drawSprites();
}
function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}