var tailsImg, tails;
//var rocksImg, rocks, rocksGroup;
var missileImg, missile, missilesGroup;
var eggmanImg, eggman;
var IslandImg, Island;
var gameState= "play"
var score=0;

function preload() {
  tailsImg = loadImage("tailsflying.png");
  //rocksImg= loadImage("rock.png");
  missileImg = loadImage("Missile.jpg");
  eggmanImg = loadImage("eggman.webp");
  IslandImg = loadImage("island.png");
}

function setup() {
  createCanvas(600, 600);

  
  Island = createSprite(200, 150);
  Island.addImage("island", IslandImg);
  Island.scale = 2;
  Island.velocityX = 2;

  tails = createSprite(300, 200);
  tails.addImage(tailsImg);
  tails.scale = 0.3;

  eggman = createSprite(50, 100);
  eggman.addImage(eggmanImg);
  eggman.scale = 0.4;

  missilesGroup = new Group();
  //rocksGroup = new Group();
}

function draw() {
  text("Score: "+ score, 500,50);
 
  if(gameState === "play"){
  if (Island.x > 500) {
    Island.x = Island.width / 4;
  }

  score = score + Math.round(getFrameRate()/60);


  if(keyDown("up_arrow")){
    tails.y= tails.y-3
    }
  
   if(keyDown("down_arrow")){
    tails.y= tails.y+3
   }
   
    background("white");
  
    if(missilesGroup.isTouching(tails)){
      tails.velocityY=0
      gameState= "end"
      tails.destroy()
    }
    
    if(tails.y>300){
      tails.destroy()
      gameState= "end"
    }
  
    spawnMissiles();
    drawSprites();

 }

  if(gameState === "end"){
    stroke("yellow")
    fill("yellow")
    textSize(30)
    text("gameover", 230, 250)
  }
}

function spawnMissiles() {
  if (frameCount % 60 === 0) {
    missile = createSprite(100, 15);
    missile.y = Math.round(random(100, 200));
    missile.x = Math.round(random(500, 600));
    missile.addImage(missileImg);
    missile.scale = 0.2;
    missile.velocityX = -3;
    missile.lifetime = 700;
    missilesGroup.add(missile);
  }
}
