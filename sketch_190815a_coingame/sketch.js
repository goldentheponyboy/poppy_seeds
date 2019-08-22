// main p5.js file

let screen = 0;
let c;
let time = 0;
let timeStart = 0;
let snd;
let cat;
let moneyCat;

function preload(){
  soundFormats('wav');
  snd = loadSound('sounds/coin.wav');
  cat = loadImage('images/cat.png');
  moneyCat = loadImage('images/moneycat.jpg');
}

function setup() {
createCanvas(200,300);
c = color(255, 204, 0);
imageMode(CENTER);
}

function draw() {
  background(c);

  if ( screen == 0){
    startScreen();
  } else if (screen == 1){
    game();
    time = (frameCount/frameRate() - timeStart);
    if (time > 15){
      screen = 2;
    }
  } else if (screen == 2){
    endScreen();
  }
//print(timeStart + " -  " + time);
} // end draw

function mousePressed(){

if(screen == 0){
  screen = 1;
  timeStart = frameCount/frameRate();
} else if(screen == 1){
// GAME: if statement check ball is pressed
if ( mouseX > (xPos-dim) &&
     mouseX < (xPos+dim) &&
     mouseY > (yPos-dim) &&
     mouseY < (yPos+dim) ) {
      reset();
      score += 1;
      snd.play();
  }
}
}
