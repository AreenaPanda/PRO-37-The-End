class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    Player1= createSprite(150,200);
    Player1.addImage(player1Img);

    Player2= createSprite(200,200);
    Player2.addImage(player2Img);

    Player3= createSprite(250,200);
    Player3.addImage(player3Img);

    Player4= createSprite(300,200);
    Player4.addImage(player4Img);

    Player5= createSprite(350,200);
    Player5.addImage(player5Img);

    Player6= createSprite(400,200);
    Player6.addImage(player6Img);

    Players=[Player1,Player2,Player3,Player4,Player5,Player6]
  }

  play(){
    form.hide();

    textSize(40);
    textFont("Arial Black")
    fill("black")
    stroke("yellow")
    text("Game Has Started!", 550, 600)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     
      background(ground)
      image(track,0,-displayHeight*4,displayWidth, displayHeight*5);

      var index = 0

      //x & y of the Players 
      var x = 0
      var y 

      for(var plr in allPlayers){
        //add one to the index for every loop
        index=index+1

        x = x+200

          y = displayHeight-allPlayers[plr].distance
          Players[index-1].x=x
          Players[index-1].y=y 

       if(index===player.index){
         Players[index-1].shapeColor="yellow"
         camera.position.x = displayWidth/2
         camera.position.y = Players[index-1].y
       }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }

  if(player.distance>3800){
    gameState = 2
  }

  drawSprites()
}

end(){
  console.log("game has End!")
}

}
