const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var obj
var ground
function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world
 var option={
   restitution:0.9
 }
 obj=Bodies.rectangle(80,40,40,80,option)
 World.add(world,obj)
var options={
  isStatic:true
}
 ground=Bodies.rectangle(400,350,800,20,options)
 World.add(world,ground)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(obj.position.x,obj.position.y,40,80)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
}
