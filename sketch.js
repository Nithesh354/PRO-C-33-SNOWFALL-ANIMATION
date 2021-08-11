const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var snow,snowimg


function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;

  
  
}

function preload() {
 snowimg = loadImage("snow3.jpg")

}
function draw() {
  background(255,255,255);

  snow = new Snows()
  
  

  drawSprites();
}