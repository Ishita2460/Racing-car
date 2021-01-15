class Game {
constructor(){
}
getState(){
    var GameStateref = database.ref("GameState");
    GameStateref.on("value",function(data){
        GameState= data.val();
    })
}
update(state){
    database.ref("/").update({
        GameState:state
    })
} 

async Start(){
    if(GameState===0){
        player = new Player();
        var PlayerCountref = await database.ref("PlayerCount").once("value");
        if(PlayerCountref.exists()){
            PlayerCount=PlayerCountref.val();
        player.getCount();
        }
    form = new Form();
    form.display();
    }
    car1 = createSprite(100,200,100,100);
    car1.addImage(car1IMG);
    
    car2 = createSprite(300,200,100,100);
    car2.addImage(car2IMG);

    car3 = createSprite(500,200,100,100);
    car3.addImage(car3IMG);

    car4 = createSprite(700,200,100,100);
    car4.addImage(car4IMG);

    cars = [car1,car2,car3,car4];
    }

play(){
    form.hide();
    textSize(30);
    text("Game has STARTED", 120,100);
    Player.getplayerinfo();
    player.getcarsatend();
 if(allplayers !== undefined){
     background("brown");
     image(trackIMG, 0,-displayHeight*4,displayWidth,displayHeight*5);
    // var displayPosition = 130;
    var index = 0;
    var x = 175;
    var y;

     for(var plr in allplayers){
         index = index+1;
         x = x+200;
         y = displayHeight - allplayers[plr].distance;
         cars[index - 1].x = x;
         cars[index - 1].y = y;

         
         if(index === player.index){
             stroke(10)
             fill("red")
             ellipse(x, y, 100, 40);
            
             cars[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
             camera.position.y = cars[index - 1].y;

         }
         
        // displayPosition+=20
        // textSize(15);
        // text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayPosition);
     }
 }
 if(keyIsDown(UP_ARROW) && player.index !== null){
     player.distance+=50;
     player.update();
 }
if(player.distance>4300){
    GameState = 2;
    player.rank +=1;
    Player.updatecarsatend(player.rank);
}
drawSprites();

}

end(){
console.log("game Ended")
console.log("player rank"+ player.rank)
}

}

 