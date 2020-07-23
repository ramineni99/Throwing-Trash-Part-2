
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var targetOne,targetTwo,targetThree


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,220,70);
	ground = new Ground(400,height,800,20);
	targetOne = new Trash(740,620,10,220);
	targetTwo = new Trash(540,620,10,220);
	targetThree = new Trash(640,680,210,10);
	dustBin = new DustBin(640,580,230,250);
	Engine.run(engine);
  
}


function draw() {
	background(180);
	Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  paper.display();
  targetOne.display();
  targetTwo.display();
  targetThree.display();
  dustBin.display();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:375,y:-1905});
	}
	}


