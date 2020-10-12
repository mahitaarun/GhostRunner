var towerImage, tower;
var doorImage, door, doorsGroup;












function preload()
{
 towerImage = loadImage("tower.png");
 doorImage = loadImage("door.png");
}

function setup()
{
 createCanvas(600,500);
 tower = createSprite(300,300);
 tower.addImage(towerImage);
 tower.velocityY = 1;
 tower.scale = 0.95;
 doorsGroup = new Group();
  
  
}

function draw()
{
  background(0);
  if (tower.y> 400)
  {
    tower.y = 300;
  }  
  
  spawnDoors();
  
  
  drawSprites();
  
}

 function spawnDoors()
{
  if (frameCount % 200===0)
  {
    door = createSprite(200,-50);
    door.addImage(doorImage);
    door.velocityY = 1;
    door.x = Math.round(random(120,400));
    door.scale = 1.1;
    door.lifetime = 600;
    doorsGroup.add(door);
    
  }
 }