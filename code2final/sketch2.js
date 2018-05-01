let table;
let bubbles;

var howl;
var kiki;
var mononoke;
var spirited;
var totoro;

var d;

function preload(){

  table = loadTable('data.csv','header');
  // console.log(table);

}

function setup(){

  createCanvas(windowWidth,windowHeight);
  loadData();

  howl = loadImage("assets/howl.png");
  kiki = loadImage("assets/kiki.png");
  mononoke = loadImage("assets/mononoke.png");
  spirited = loadImage("assets/spirited.png");
  totoro = loadImage("assets/totoro.png");

}

function draw(){

  background(255, 224, 214);

  for(let i=0;i<bubbles.length;i++){
    bubbles[i].display();
  }

}

function loadData(){

  bubbles = [];

  for(let i=0;i<table.getRowCount();i++){
    let row = table.getRow(i);
    let movie = row.get("movie");
    let people = row.get("people");

    bubbles[i] = new Bubble(random(50,windowWidth-100),random(50,500),movie,people*1.5);
  }
}

class Bubble{

  constructor(tempX,tempY,tempMovie,tempPeople){

    this.x = tempX;
    this.y = tempY;
    this.movie = tempMovie;
    this.people = tempPeople;

  }

  display(){

    fill(66,71,104);
    noStroke();
    textFont('Courier');

    textSize(30);
    text("most beloved ghibli movies",50,50);

    if(this.movie=="spirited away"){
      image(spirited,this.x,this.y,this.people,this.people);
    }else if(this.movie=="princess mononoke"){
      image(mononoke,this.x,this.y,this.people,this.people);
    }else if(this.movie=="howl's moving castle"){
      image(howl,this.x,this.y,this.people,this.people);
    }else if(this.movie=="my neighbor totoro"){
      image(totoro,this.x,this.y,this.people,this.people);
    }else if(this.movie=="others"){
      image(kiki,this.x,this.y,this.people,this.people);
    }

    textFont('Courier New');
    textSize(20);
    text(this.movie,this.x,this.y+this.people+8);

  }

}
