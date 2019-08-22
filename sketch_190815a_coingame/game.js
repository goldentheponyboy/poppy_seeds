// game function
let xPos = 200;
let yPos = 0;
let dim = 40;
let speed = 2.6;
let score = 0;

function game(){
  //ellipse(xPos,yPos,dim,dim);
  image(cat, xPos, yPos, dim, dim);
  // moving the ball
  yPos += speed;
  if ( yPos > height+dim){
    reset();
  }
  // score
  text('score = ' + score, width/2,20);

  // if (score > 2){
  //   screen = 2;
  // }

}

function reset(){
  yPos = -50;
  xPos = random(width);
  speed = random(2,4);
  dim = random(20,50);
}
