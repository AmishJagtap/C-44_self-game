var boy,laser,hallway,boyImage,laserImage,hallwayImage

function preload(){

boyImage = loadImage("sprites/boy.png")
laserImage = loadImage("sprtites/laser.png")
hallwayImage = loadImage("sprites/hallway.png")

}

function setup() {
  createCanvas(1200,800);

  
} 

function draw() {
  background(0);
  drawSprites();
}