var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Player1, Player2, Player3, Player4, Player5, Player6;
var Players;
var player1Img, player2Img, player3Img, player4Img, player5Img, player6Img;
var ground, track; 

function preload(){
  player1Img = loadImage("images/car1.png");
  player2Img = loadImage("images/car2.png");
  player3Img = loadImage("images/car3.png");
  player4Img = loadImage("images/car4.png");
  player5Img = loadImage("images/car5.png");
  player6Img = loadImage("images/car6.png");
  
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
  
  }



function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 6){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
