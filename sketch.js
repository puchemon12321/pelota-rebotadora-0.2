
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle=60;
var piso1,piso2,piso3,piso4;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(350,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
/*
  ground1 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);
 
  ground = Bodies.rectangle(100,389,650,20,ground_options);
  World.add(world,ground);*/

  piso1 = new Piso(50,370,50,30);
  piso2 = new Piso(150,370,50,30);
  piso3 = new Piso(250,370,50,30);
  piso4 = new Piso(320,370,50,30);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
 /* 
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
*/
 piso1.show();
 piso2.show();
 piso3.show();
 piso4.show();

  ellipse(ball.position.x,ball.position.y,20);
 /* rect(ground.position.x,ground.position.y,650,20);*/
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  