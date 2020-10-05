const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(480,800);

   ground = new Ground(240,800,480,10);
  
}

function draw() {
  background(255,255,255); 

  for(var k = 0;k <=innerWidth; k = k+80){
    division.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));1
  }

  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new plinkos(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new plinkos(j,175));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var j = 0; j <particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k<divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();

  drawSprites();
}