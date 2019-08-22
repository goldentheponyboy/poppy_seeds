let diameter;
let angle = 0;

function setup() {
  createCanvas(600, 400);
  diameter = 50;
  //noStroke();
  //stroke(232,186,187,91);
  strokeWeight(2);
  noFill();
  frameRate(20);
}

function draw() {
background (186, 232, 217, 91);

for ( let x = 0; x <= width; x += 10){
let offset = x/50;
let offsetY = x/50;
let d2 = 10 + (sin(angle+offset) * diameter) / 2 + diameter / 2;
let posY = (height/2) + (cos(angle+offsetY)*mouseX);
//map (input, input start, input end, output start, output end)
let cl = map (x, 0, width, 0, 250);
stroke(cl,200,200);
fill(cl,200,200)
ellipse(x, posY, d2, d2);
}//end for loop

print( frameRate())
angle += 0.05;

}//end draw
