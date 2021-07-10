const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase,playerBase,Player,computer


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
playerBase=new PlayerBase(300,random(450,height-300),180,150)
computerBase=new ComputerBase(200,random(450,height-300),180,150)
Player=new player (285,PlayerBase.body.position.y-153,50,180)
computer=new computer(330,ComputerBase.body.position.y-153,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display();
computerBase.display();
//display Player and computerplayer
   Player.display();
   computer.display()

}
