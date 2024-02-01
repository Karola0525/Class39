var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

var allPlayers,car1,car2,gameState
var cars=[]
//PRIMERO IR A LA CLASE GAME

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  //QUINTO CARGAR RECURSOS DEL JUEGO E IR A LA CLASE GAME
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  //DOCE ACTUALIZAR GAMESTATE CUANDO PLAYERCOUNT SEA 2
  if(playerCount===2){
    game.update(1);
  }
//OCTAVO CAMBIAR GAME STATE A 1 Y LLAMAR A FUNCIÓN PLAY 
//OJO AQUÍ COMIENZA LA ACTIVIDAD DEL ALUMNO, IR A LA LCASE PLAYER
  if(gameState===1){
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
