class Player{
    constructor(){
        this.index = null ; 
        this.name = null ;
        this.distance = 0 ;
        this.rank = null;
    }
    getCount(){
        var PlayerCountref = database.ref("PlayerCount");
    PlayerCountref.on("value",function(data){
        PlayerCount= data.val();
    })
    }
    updateCount(count){
        database.ref("/").update({
            PlayerCount:count 
        })
    }
    update(){
        var Playerindex ="Players/Player"+this.index;
        database.ref(Playerindex).set({
            name:this.name,
            distance:this.distance 
        })
    }

    static getplayerinfo(){
        var playerinforef = database.ref("Players");
        playerinforef.on("value",(data)=>{
            allplayers= data.val();
    });
}
    getcarsatend(){
        database.ref('/').on("value",(data)=>{
            this.rank = data.val();
        });
        
    }

    static updatecarsatend(rank){
      database.ref('/').update({
          carsAtEnd: rank
      })
    }
}