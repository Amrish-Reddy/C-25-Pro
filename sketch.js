const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    AmrishReddy1 = new Dustbin(902,505,10,120);
    AmrishReddy2 = new Dustbin(962,565,130,10);
    AmrishReddy3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    crumpledPaper.display();
    AmrishReddy1.display();
    AmrishReddy2.display();
    AmrishReddy3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
