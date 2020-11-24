var car;
var wall;
var weight, speed;


function setup() {
  createCanvas(1200, 300);

  speed = random(70,200);
  weight = random(400, 1500);
  car = createSprite(70, 100, 50, 50);
  car.shapeColor = "blue";
  car.velocityX = speed;
  wall = createSprite(1000, 150,50,200);
}

function draw() {
  background(0);  
  if(wall.x-car.x < (car.width + wall.width)/2){
car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;
if(deformation > 100){
  car.shapeColor = "green";
}
if(deformation > 100 && deformation < 180){
  car.shapeColor = "yellow";
}
if(deformation < 180){
  car.shapeColor = "red";

}


  }
  drawSprites();
}