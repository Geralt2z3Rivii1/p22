var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada
    imgFada= loadAnimation("images/fairyImage1.png","images/fairyImage2.png") 
}

function setup() {
    
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada=createSprite(400,300,39,80)
    fada.addAnimation("fada",imgFada)
    fada.scale=0.2

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
    
    
}

function draw(){
    background(bgImg)

    if(keyDown(RIGHT_ARROW)){
        fada.x=fada.x+5
    }

    if(keyDown(LEFT_ARROW)){
        fada.x=fada.x-5
    }

    if(star.y>470 && starBody.position.y>470){
        Matter.Body.setStatic(starBody,true);
        
    }



    drawSprites()
}