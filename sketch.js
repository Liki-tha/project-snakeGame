const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    createCanvas(400,400);
   
    engine = Engine.create();
    world = engine.world;
    
  width = floor(width / 20);
  height = floor(height / 20);
  frameRate(5);
  snake = new Snake();
  foodLocate();
}

function foodLocate() {
  let x = floor(random(width));
  let y = floor(random(height));
  food = createVector(x, y);
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key === ' ') {
    snake.grow();
  }

}

function draw() {
  scale(20);
  background(220);
  if (snake.eat(food)) {
    foodLocate();
  }
  snake.update();
  snake.show();

  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);

 

  if (snake.endGame()) {
    console.log("END GAME");
    noLoop();
    background(255, 0, 0);
   
  }
 
}