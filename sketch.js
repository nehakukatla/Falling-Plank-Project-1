
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, platform, ground, plank, rand;
var blush, green, pink, purple, red;

function preload() {
    blush = loadImage("plankImages/blush.png");
    green = loadImage("plankImages/green.png");
    pink = loadImage("plankImages/pink.png");
    purple = loadImage("plankImages/purple.png");
    red = loadImage("plankImages/red.png");
}

function setup() {
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(300, height, 600, 50);
    platform = new Platform(300, 560);

}

function draw() {
    background(175, 238, 238);
    Engine.update(engine);
    ground.display();
    platform.display();

    //creating random x positioned planks falling from sky
    rand = Math.round(random(1, 5));
    if (frameCount % 175 === 0) {
        plank = createSprite(random(75, 525), 0, 150, 70);
        plank.velocityY = 10;

        switch (rand) {
            case 1: plank.addImage(blush);
                break;
            case 2: plank.addImage(green);
                break;
            case 3: plank.addImage(pink);
                break;
            case 4: plank.addImage(purple);
                break;
            case 5: plank.addImage(red);
                break;
            default: break;
        }
    }
}

