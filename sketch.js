
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, ball
var dustbinObjImg, paperImg
var world;



function preload()	{
	dustbinObjImg = loadImage("dustbingreen.png")


}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj= createSprite(964,520,20,20);
	dustbinObj.addImage(dustbinObjImg);
	dustbinObj.scale = 0.8
	groundObject=new ground(width/2,670,width,20);
	bin1 = new dustbin(902,505,10,120);
	bin2 = new dustbin(962,565,130,10);
	bin3 = new dustbin(1024,505,10,120);
	
	
	

	crumpledPaper = new Paper();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  groundObject.display();
  bin1.display();
  bin2.display();
  bin3.display();
  crumpledPaper.display();
  

  drawSprites();

}




function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:80,y:-80})
	}
}






