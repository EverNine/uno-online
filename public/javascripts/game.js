var globalScale = 1;
var canvas = document.getElementById("demoCanvas");
var stage = new createjs.Stage(canvas);
var myCards = new Hand(canvas.width/4 ,canvas.height*0.9,canvas.width/2,canvas.height/3);
var table = new Table(canvas.width/5, 0, canvas.width/5*3, canvas.height/3*2);
var update = true;

function init() {

    stage.enableMouseOver(10);

    stage.addChild(table);
    stage.addChild(myCards);
    
    var player1 = new OtherHand(7, canvas.width/2, 0, canvas.width/2, canvas.height/3, 180, 0.5);
    stage.addChild(player1);

    var card = new Card(3,1);
    myCards.addCard(card);
    card = new Card(5,2);
    myCards.addCard(card);
    card = new Card(6,3);
    myCards.addCard(card);
    card = new Card(9,1);
    myCards.addCard(card);
    card = new Card(-1,4);
    myCards.addCard(card);
    card = new Card(-2,3);
    myCards.addCard(card);
    card = new Card(-3,2);
    myCards.addCard(card);
    card = new Card(-4,1);
    myCards.addCard(card);
    card = new Card(-5,4);
    myCards.addCard(card);
    myCards.arrange();

    var board = new ColorBoard(canvas.width/2, canvas.height/2);
    stage.addChild(board);

    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
}

