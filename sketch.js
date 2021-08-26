var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
var PLAY=1;
var END=0;
var gameSTATE=PLAY;
var rand;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redB = new Group();
  blueB = new Group();
  greenB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  
   score = 0    
}

function draw() {
 background(0);
  // moving ground

if(gameSTATE === PLAY)
{
  
  if (scene.x < 0){
    scene.x = scene.width/2;
  }

  scene.velocityX = -3 

  if (keyDown("space")) {
    createArrow();
  }
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
 //moving bow
 bow.y = World.mouseY
  
 // release arrow when space key is pressed

 
//creating continous enemies
var rand = Math.round(random(1,4));

if (World.frameCount % 100 == 0) {
  if (rand == 1) {
    redBalloon();
  } else if (rand == 2) {
    greenBalloon();
  } else if (rand == 3) {
    blueBalloon();
  } else {
    pinkBalloon();
  }
}  

  if(score===11){
    gameSTATE = END;
  }

}

else if(gameSTATE === END)
{
  
redB.setVelocityXEach(0);
blueB.setVelocityXEach(0);
greenB.setVelocityXEach(0)
pinkB.setVelocityXEach(0);
arrowGroup.setVelocityXEach(0);

textSize(20);
fill("red");
text(" Game Over",150,200);
redB.destroyEach();
blueB.destroyEach();
greenB.destroyEach();
pinkB.destroyEach();
scene.visible=false;
bow.visible=false;
arrowGroup.destroyEach();
}

    
  drawSprites();
  textSize(15);
  fill("black");
  text("Score : "+score,300,40);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkB.add(pink);
}
