var bg
var ship, ship_sailing;

function preload(){
sea = loadImage("sea.png");
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
 
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(51);
  image(sea,0,0,windowWidth,windowHeight);  

  ship = createSprite(200,400,50,50)
  ship.addAnimation("sailing",ship_sailing);
  ship.scale = 0.5;
  if (sea.x < 0){
    sea.x = sea.widht/2
  }

  sea.velocityX = 2;
  drawSprites();
}