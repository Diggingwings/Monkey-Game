
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  


   
  
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation('moving',monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityx=-4
  ground.x=ground.width/2
  console.log(ground.x)

  
  
}
 
function draw() {
background('white')
  
  var surviavaltime=0;
  stroke('white')
  textSize(20);
  fill('white')
  text('Score: ' +score,500,50);
  
  stroke('black')
  textSize(20);
  fill('black')
  survivaltime=Math.ceil(frameCount/frameRate())
  text('Survival Time: '+ survivaltime,100,50)
  
  
  
  
  if(ground.x<0){
    ground.x =ground.width/2
  }
  
  if(keyDown('space')){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
 
  banana()
  
  drawSprites()
}

function banana(){
  var banna
  banna=createSprite(400,500,10,10)
  banna.addImage(bananaImage)
  banna.scale=0.1
 banna.velocityX=-4
  banna.lifetime=100
  if (frameCount % 10 === 0) { 
    banna.y = Math.round(random(20,320))
  }
}




