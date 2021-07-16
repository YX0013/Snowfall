var bgImg;
var snowImg1, snowImg2, snowGroup;
var happyBoi, happyDude, happyPair, happyBoiImg, happyDudeImg, happyPairImg;
var snowMusic;
var snowPlayAudio;

function preload() {
  bgImg = loadImage("snow2.jpg");
  snowImg1 = loadImage("snow4.webp");
  snowImg2 = loadImage("snow5.webp");
  happyBoiImg = loadImage("happyBoi.png");
  happyDudeImg = loadImage("happyDude.png");
  happyPairImg = loadImage("happyPair.png");
  snowMusic = loadSound("BTS - 전하지 못한 진심 (The Truth Untold) (feat. Steve Aoki) - INSTRUMENTAL BY LY.mp3")
}

function setup() {
  createCanvas(800,400);
  happyBoi = createSprite(700, 340, 50, 50);
  happyBoi.addImage(happyBoiImg);
  happyBoi.scale = 0.1;
  happyDude = createSprite(300, 360, 50, 50);
  happyDude.addImage(happyDudeImg);
  happyDude.scale = 0.2;
  happyPair = createSprite(100, 350, 50, 50);
  happyPair.addImage(happyPairImg);
  happyPair.scale = 0.2;
  snowGroup = createGroup();

  snowMusic.play();
}

function draw() {
  background(bgImg);
  if(happyPair.y < 340) {
    happyPair.velocityY = 0.4;
  } else if (happyPair.y > 349) {
    happyPair.velocityY = -0.4;
  }
  happyDude.velocityX = -0.2;
  if(happyDude.y < 355) {
    happyDude.velocityY = 0.4;
  } else if (happyDude.y > 359) {
    happyDude.velocityY = -0.4;
  }
  happyBoi.velocityX = 0.8;
  if(happyBoi.y < 330) {
    happyBoi.velocityY = 0.4;
  } else if (happyBoi.y > 339) {
    happyBoi.velocityY = -0.4;
  }
  snowFall(); 
  drawSprites();
  textSize(22);
  noStroke();
  fill("white");
  text("A bonus 4-minute beautiful piano instrumental for you to listen to!", 50, 50);
}

function snowFall() {
  if(frameCount%60 === 0) {
    var snow = createSprite(random(50, 750), 0, 25, 25);
    snow.scale = 0.05;
    snowGroup.add(snow);
    var count = random(1,2);
    if(count === 1) {
      snow.addImage(snowImg1);
    } else {
      snow.addImage(snowImg2);
    }
    snow.velocityY = 3;
    snow.lifetime = 120;
  }
}

function mousePressed() {
  snowMusic.play(); 
}
