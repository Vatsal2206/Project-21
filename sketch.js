var bullet,wall,thickness;
var speed,weight;
var deformation;
var indicator;
var damage;

function setup() {
  createCanvas(windowWidth,windowHeight);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(width-5000, height/2, 50, 30);
  bullet.shapeColor = rgb(135, 131, 11);

  wall = createSprite(width-100,height/2,thickness,height/2);
  wall.shapeColor = "black";

  indicator = createSprite(width - 1300,height - 100 , 50, 40);
  indicator.shapeColor = "white";

  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

}

function draw() {
  background(43, 44, 112);  
  drawSprites();

  if(collided(wall,bullet)){
    if(damage < 10){
      indicator.shapeColor = rgb(4, 255, 0);
      textSize(25);
      fill(rgb(4, 255, 0));
      text("GREAT!! THE WALL IS SELECTED :)",height/2,width-1200);

    }
    
    if(damage > 10){
      indicator.shapeColor = rgb(255, 0, 13);
      textSize(25);
      fill(rgb(255, 0, 13));
      text("OOPS!! THE WALL IS REJECTED :(",height/2,width-1200);

    }
    else{
      indicator.shapeColour = "white";
    }
  }

  bullet.velocityX = speed;

  fill("cyan");
  textSize(20);
  text("INDICATOR : ",width - 1450,height - 95)
  text("DAMAGE : " + Math.round(damage),width - 1450,height - 50);
  text("THICKNESS OF WALL :"+ Math.round(thickness), width-1450,height- 15);
  
  fill("cyan");
  textSize(30);
  text("WALL" , wall.x - 30 , wall.y + 220);

  fill("cyan");
  textSize(30);
  text("BULLET",bullet.x - 40,bullet.y + 70);
}

function collided(object1,object2){
  if(object1.x - object2.x < (object1.width + object2.width)/2){
    object2.velocityX = 0;
    
   return true;
}else{
   return false;
}
}