
var ball={

x: 200,
y:200,
r:50,
colour:"blue",
vX:0,
vY: 4


};





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.colour);
  ball.x=ball.x-3
  ball.y=ball.y+4
}