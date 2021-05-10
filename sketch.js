
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(100, 400, 50, 70);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400, 450, 900, 10);
  ground.velocityX=-4;
  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
  
}


function draw() {
  background(255);
  if(ground.x<150){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  spawnFood()
  spawnObstacles()
  drawSprites()
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  
}

function spawnFood(){
  if(frameCount %80 === 0){
    banana=createSprite(600, 250, 10, 5);
    banana.y=random(120, 200);
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles(){
  if(frameCount %300 === 0){
    obstacle=createSprite(600, 430, 10, 5);
    obstacle.velocityX=-5;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=200;
    obstaclesGroup.add(obstacle);
  }
  
}


