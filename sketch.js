const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var groundObj,leftside,rightside;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;

  groundObj = new Ground(width/2,670,width,20);
  leftside = new Ground(1100,600,20,120);
  rightside = new Ground(1400,600,20,120);

  var ball_options = {

    isStatic:false,
    restitution:0.3,
    density:1.2,
    friction:0

  }

  ball = Bodies.circle(250,100,20,ball_options);
  World.add(world,ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  groundObj.show();
  leftside.show();
  rightside.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}

function keyPressed () {

  if (keyCode===UP_ARROW) {

    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

  }

}

