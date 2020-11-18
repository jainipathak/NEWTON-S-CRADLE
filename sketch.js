
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,bobObject1;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,350,100,20);
	roof.shapeColor=colour("white")
	bobObject1=new Bob(100,645,50);
	bobObject1.shapeColor=colour("pink")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

roof.display();
bobObject1.display();
  
  drawSprites();
 
}



