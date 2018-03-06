var ghibliSpecies;

function preload() {
  // Get the most recent earthquake in the database
  var url = 'https://ghibliapi.herokuapp.com/species';
  ghibliSpecies = loadJSON(url);
}

function setup() {
  createCanvas(800,500);
  noLoop();
  fill(255);
  textSize(25);
}

function draw() {
  background(0);
  print(ghibliSpecies);

  var randomNumber = random(0,100);

  var cats = ghibliSpecies[4];
  var catColors = cats.hair_colors;
  var catNum = cats.people.length;

  var totoro = ghibliSpecies[5];
  var totoroNum = totoro.people.length;

  var gods = ghibliSpecies[3];
  var godNum = gods.films.length;

  var humans = ghibliSpecies[0];
  var hairColors = humans.hair_colors;

  text("Refresh for a Ghibli fact.",500,490);

  if(randomNumber<=20){
    text("What colors are Ghibli cats?",20,50);
    text(catColors, width/2-225, height/2);
  }

  if(randomNumber>20&&randomNumber<=40){
    text("How many Totoros are there?",20,50);
    text(totoroNum, width/2, height/2);
  }

  if(randomNumber>40&&randomNumber<=60){
    text("How many Ghibli films have a god in them?",20,50);
    text(godNum, width/2, height/2);
  }

  if(randomNumber>60&&randomNumber<=80){
    text("How many Ghibli cats are there?",20,50);
    text(catNum, width/2, height/2);
  }

  if(randomNumber>80&&randomNumber<=100){
    text("What are the hair colors of Ghibli characters?",20,50);
    text(hairColors, width/2-200, height/2);
  }

}
