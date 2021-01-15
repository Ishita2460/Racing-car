class Form{
    constructor(){
        this.input= createInput("Name:");
        this.button = createButton("play");
        this.greeting= createElement("h3");
        this.reset= createButton("Reset");
        
 }

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide(); 
}

display(){
var title = createElement("h2");
title.html("Car Racing Game");
title.position(displayWidth/2-50, 0);

this.input.position(displayWidth/2-40, displayHeight/2-80);
this.button.position(displayWidth/2+40, displayHeight/2);
this.reset.position(displayWidth-100, 50);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    PlayerCount+=1;
    player.index = PlayerCount;
    player.update();
    player.updateCount(PlayerCount);

    this.greeting.html("Hello! "+ player.name);
    this.greeting.position(displayWidth/2-60, displayHeight/4);

    
});
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        database.ref("/").update({
            Players:null
        })
        
    }
    )


}
}
