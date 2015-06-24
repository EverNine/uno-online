var globalScale = 1;
var canvas = document.getElementById("Canvas");
var stage = new createjs.Stage(canvas);
var myCards = new Hand(canvas.width/4 ,canvas.height*0.9,canvas.width/2,canvas.height/3);
var table = new Table(canvas.width/5, 0, canvas.width/5*3, canvas.height/3*2);
var update = true;
var socket = io();
var player1;

function init() {

  stage.enableMouseOver(10);

  stage.addChild(table);
  stage.addChild(myCards);

  player1 = new OtherHand(7, canvas.width/2, 0, canvas.width/2, canvas.height/3, 180, 0.5);
  stage.addChild(player1);

  socket.emit("initHand");
  socket.on("newCard", function(data){
    var cardNum = Math.floor(data.card / 10);
    var cardColor = Math.abs(data.card) % 10;
    var card = new Card(cardNum,cardColor);
    myCards.addCard(card);
    myCards.arrange();
  });

  socket.on("playCard", function(data){
    var cardNum = Math.floor(data.card / 10);
    var cardColor = Math.abs(data.card) % 10;
    var card = new Card(cardNum,cardColor);
    player1.playCard(card);
  });

  //var board = new ColorBoard(canvas.width/2, canvas.height/2);
  //stage.addChild(board);

  createjs.Ticker.setFPS(24);
  createjs.Ticker.addEventListener("tick", stage);
}

