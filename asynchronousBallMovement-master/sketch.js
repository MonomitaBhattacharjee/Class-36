var canvas;
var database;
var position;
var gameState = 0;
var playerCount;
var form,player,game;

function setup(){
    database = firebase.database()
  canvas =  createCanvas(500,500);

  game = new Game()
  game.getState()
  game.start()
   
}

function draw(){

}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val()
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x,y){
database.ref("ball/position").set({
    "x":position.x+x,
    "y":position.y+y
})
}

function showError(){
    console.log("error");
}