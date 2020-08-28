
var bg1,bg2;
var pt1Img;
var playerRun;
function preload(){

bg1 = loadImage("Backgrounds/Spawn.jpg");
bg1.scale = 0.1;
bg2 = loadImage("Backgrounds/hall.jpg");
pt1Img = loadImage("Backgrounds/Tile.png")
pt1Img.scale = 0.3;
playerRun = loadAnimation("Characters/2/Run0.png","Characters/2/Run2.png","Characters/2/Run3.png");
playerAttack = loadAnimation("Characters/2/Attack0.png","Characters/2/Attack1.png","Characters/2/Attack2.png","Characters/2/Attack3.png","Characters/2/Attack4.png","Characters/2/Attack5.png","Characters/2/Attack6.png","Characters/2/Attack7.png","Characters/2/Attack8.png","Characters/2/Attack9.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 100);
 player = createSprite(240, 240, 50, 50);
 player.addAnimation("run",playerRun);
 player.addAnimation("attack",playerAttack);
 player.scale = 0.1;
 
 enemy = createSprite(displayWidth-100,displayHeight-150,50,100);
enemy.visible = false;


 pt1 = createSprite(300,280,150,20);
 pt1.addImage(pt1Img);
pt2 = createSprite(600,420,150,20);
pt2.addImage(pt1Img);
pt3 = createSprite(1190,465,150,20);
pt3.addImage(pt1Img);
ground = createSprite(displayWidth/2,displayHeight-150,displayWidth,10);

player.setCollider("rectangle",0,0,300,900)
}

function draw() {
  background(bg1);  
 player.collide(pt1);
 player.collide(pt2);
 player.collide(pt3);
 player.collide(ground);
 if(!(player.isTouching(pt1))){

player.velocityY = 3;

 }


 player.debug = true;
 pt1.debug = true;
 textSize(30);
 text(mouseX + "-" + mouseY, 600,100);
 if(keyWentDown("a")){
  player.changeAnimation("attack");
 }
 if(keyWentUp("a")){
  player.changeAnimation("run");
 }

 if(keyWentDown(RIGHT_ARROW)){
  player.velocityX = +3;
 }
 if(keyWentUp(RIGHT_ARROW)){
  player.velocityX = 0;
 }
 if(player.x>displayWidth){
  bg1 = loadImage("Backgrounds/hall.jpg");
  player.x = 50;
pt1.visible = false 
pt2.visible = false 
pt3.visible = false 
spawnEnemy();
}
  drawSprites();
}

function spawnEnemy(){
enemy.velocityX = -2
enemy.visible = true;


}

