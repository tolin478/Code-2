let sceneStates = Object.freeze({
  INTRO: 0,
  FOLLOW: 1,
  FLOWERS: 2,
  HADES: 3,
  POMEGRANATE: 4,
  HERMES: 5,
  DEMETER: 6

});

let currentState = sceneStates.INTRO;

let keyOn = false;
let clicked = false;

var font;


function setup() {
  font = "Times";
  textFont(font);

  createCanvas(1300, 650);
}

function draw() {
  drawScene(currentState);
  checkTransition(currentState);
  keyOn = false;
  clicked = false;
}

function drawScene(whichScene) {
  switch (whichScene) {

    case sceneStates.INTRO:
      background(0);
      fill(255);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("PERSEPHONE", width/2, height/2);
      fill(200);
      text("press a key to begin",800,600);
      break;

    case sceneStates.FOLLOW:
      background(0);
      fill(255);
      textSize(35);
      text("cyprus trees and a singing stream", 300, 100);
      fill(200);
      text("press a key to stalk the deer",350,500);
      fill(100);
      text("click to trail the rabbit",950,500);
      break;

    case sceneStates.FLOWERS:
      background(0);
      fill(255);
      textSize(35);
      text("a field of hyacinth and poppies and goddesses", width/2, 100);
      fill(200);
      text("gather life in soft fingers",400,500);
      fill(100);
      text("look down, down, down, down, down",600,550);
      break;

    case sceneStates.HADES:
      background(0);
      fill(255);
      textSize(35);
      text("a forgotten deity, hardened and cruel, both of you taken", 800, 500);
      fill(200);
      text("cry out, shrill, again and again and again",400,600);
      break;

    case sceneStates.POMEGRANATE:
      background(0);
      fill(255);
      textSize(35);
      text("a ruby",400,height/2);
      fill(100);
      text(" blood ",493,height/2);
      fill(255);
      text("red fruit, sweet and far too sticky",775,height/2);
      fill(200);
      text("savor fate",width/2,600);
      break;

    case sceneStates.HERMES:
    background(0);
    fill(255);
    textSize(32);
    text("radiant, winged boy", 800,100);
    fill(200);
    text("i've waited, i've waited", 900,500);
    break;

    case sceneStates.DEMETER:
    background(0);
    fill(255);
    textSize(32);
    text("a weeping mother, a dead and thawing earth", 400, 100);
    if((keyOn) || (clicked)){
      text("bloom", width/2,height/2);
    }
    break;

    default:
    break;
  }
}

function checkTransition(whichScene) {
  switch (whichScene) {

    case sceneStates.INTRO:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.FOLLOW:
        if ((keyOn) || (clicked)) {
          currentState++;
          setUpScene(currentState);
        }
      break;
    case sceneStates.FLOWERS:
      if ((keyOn) || (clicked)) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.HADES:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.POMEGRANATE:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
    break;
    case sceneStates.HERMES:
      if (keyOn) {
        currentState++;
        setUpScene(currentState);
      }
      break;
    case sceneStates.DEMETER:
      if (keyOn) {
        currentState = sceneStates.DEMETER;
        setUpScene(currentState);
      }
      break;
    default:
      break;
  }
}

function setUpScene(whichScene) {
  switch (whichScene) {

    case sceneStates.INTRO:
      break;
    case sceneStates.FOLLOW:
      break;
    case sceneStates.FLOWERS:
      break;
    case sceneStates.HADES:
      break;
    case sceneStates.POMEGRANATE:
      break;
    case sceneStates.HERMES:
      break;
    case sceneStates.DEMETER:
      break;
    default:
      break;
  }
}

function keyPressed() {
  keyOn = true;
}

function mouseClicked(){
  clicked = true;
}
