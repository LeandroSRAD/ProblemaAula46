var buraco,buracoImg;
var criança,criançaImg;
var campo,campoImg;
var moeda,moedaImg;
var pá,páImg;
var poçaDeÁgua,poçaDeÁguaImg;
var ronaldo,ronaldoImg;
var background,backgroundImg;
var ball,ballImg;

function preload() {
  buracoImg = loadImage("Buraco.gif");
  criançaImg = loadImage("Criança.png");
  campoImg = loadImage("Campo.jpg");
  moedaImg = loadImage("Moeda.png");
  páImg = loadImage("Pá.jpg");
  poçaDeÁguaImg = loadImage("PoçaDeÁgua.jpg");
  ronaldoImg = loadImage("Ronaldo.jpg");
  ballImg = loadImage("Bola.png");
}

function setup() {
  canvas = createCanvas(2000,1000);
  
  criança = createSprite(900,160,100,100);
  criança.addImage("criança",criançaImg);
  criança.scale = 0.9;
  

  ronaldo = createSprite(1000,600,100,100);
  ronaldo.addImage("ronaldo",ronaldoImg);
  ronaldo.scale = 0.4;

  ball = createSprite(300,200,100,100);
  ball.addImage("ball",ballImg);
  ball.scale = 0.4;
  ball.visible = false;

  buraco = createSprite(1300,250,100,100);
  buraco.addImage("buraco",buracoImg);
  buraco.scale = 0.4;

}

function draw() {
  background("white");
  image(campoImg,0,0,2000,1000);

   if(keyDown("up")){
     ronaldo.positionY-= 5;
   }

   if(keyDown("down")){
     ronaldo.positionY+= 5;
   }

   if(keyDown("left")){
     ronaldo.positionX-= 5;
   }

   if(keyDown("right")){
     ronaldo.positionX+= 5;
   }

  

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
