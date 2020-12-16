const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;


var engine, world;
var pendulums = [];
var slings = [];
var mConstraint;


function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


  for(var i = 0; i < 5; i++){
    pendulums.push(new Pendulum(60 * (i+1) + 200, 200, 'black'))
    slings.push(new Sling(pendulums[i].body, {x: 60 * (i+1) + 200, y: 10} ))
  }
}

function draw() {
  background(220);

  for(var i in pendulums){
    slings[i].display();
    pendulums[i].display()
  }

  Engine.update(engine)
}

// function keyPressed() { 
//   if (keyCode === UP_ARROW) { 
//     Matter.Body.applyForce(pendulums[0].body,pendulums[0].body.position,{x:50,y:-45}); 
//   } 
// }

function mouseDragged() {
  Matter.Body.setPosition(pendulums[0].body, { x: mouseX, y: mouseY });
}

// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Mouse = Matter.Mouse;
// const Constraint = Matter.Constraint;

// const MouseConstraint = Matter.MouseConstraint;

// var world, engine, canvas;
// var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
// var sling1, sling2, sling3, sling4, sling5;
// var mConstraint;

// function setup() {
//   canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
//   engine = Engine.create();
//   world = engine.world;

//   let canvasmouse = Mouse.create(canvas.elt);
//   canvasmouse.pixelRatio = pixelDensity();
//   let options = {
//     mouse: canvasmouse
//   };
//   mConstraint = MouseConstraint.create(engine, options);
//   World.add(world, mConstraint);

//   pendulum1 = new Pendulum(340, 450, "#00b0ff");
//   pendulum2 = new Pendulum(400, 450, "#e91e63");
//   pendulum3 = new Pendulum(460, 450, "#ffc107");
//   pendulum4 = new Pendulum(520, 450, "#e91e63");
//   pendulum5 = new Pendulum(580, 450, "#00b0ff");

//   sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
//   sling2 = new Sling(pendulum2.body, { x: 400, y: 200 });
//   sling3 = new Sling(pendulum3.body, { x: 460, y: 200 });
//   sling4 = new Sling(pendulum4.body, { x: 520, y: 200 });
//   sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
// }

// function draw() {
//   background(0);
//   Engine.update(engine);
//   pendulum1.display();
//   pendulum2.display();
//   pendulum3.display();
//   pendulum4.display();
//   pendulum5.display();
//   sling1.display();
//   sling2.display();
//   sling3.display();
//   sling4.display();
//   sling5.display();
// }

// function mouseDragged() {
//   Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
// }