var GameState=0;
var database,PlayerCount;
var form,player,game;
var allplayers;
var distance = 0;
var cars,car1,car2,car3,car4;
var car1IMG,car2IMG,car3IMG,car4IMG;
var trackIMG,groundIMG;

function preload(){
    car1IMG = loadImage("images/car1.png");
    car2IMG = loadImage("images/car2.png");
    car3IMG = loadImage("images/car3.png");
    car4IMG = loadImage("images/car4.png");
    trackIMG = loadImage("images/track.jpg");
    groundIMG = loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth - 20 , displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.Start();


    
}

function draw(){
    if(PlayerCount===4){
        game.update(1);
    }

    if(GameState===1){
        clear();
        game.play();
    }
    if(GameState===2){
        game.end();
    }
}