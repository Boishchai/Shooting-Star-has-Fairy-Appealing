var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg, fairyAnime;
var wow;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadImage("fairy.png");
	fairyAnime = loadAnimation("fairyImage1.png", "fairyImage2.png");
	wow = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	wow.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,600, 50, 50);
	fairy.addImage(fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  keyPressed();

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 520 && starBody.position.y > 520)
  {
	Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyDown("left"))
	{
		fairy.x = fairy.x - 2;
		fairy.addAnimation(fairyAnime);
	}
	if(keyDown("right"))
	{
		fairy.x = fairy.x + 2;
		fairy.addAnimation(fairyAnime);
	}
}
