(function() {

function Hand(x ,y, w, h) {
	this.Container_constructor();
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.scale = globalScale;
    this.scaleX = globalScale;
    this.scaleY = globalScale;
	
	this.setup();
}

var p = createjs.extend(Hand, createjs.Container);

p.setup = function() {
} ;

p.addCard = function(card){
    card.on('rollover',function(evt){
        createjs.Tween.get(card, {loop: false})
            .to({y: this.oriY - 50, scaleX: this.scale*1.1, scaleY: this.scale*1.1}, 100);
    });
    card.on('rollout',function(evt){
        createjs.Tween.get(card, {loop: false})
            .to({y: this.oriY, scaleX: this.scale, scaleY: this.scale}, 100);
    });
    card.on('click', function(evt){
        var newX = table.width/2 + Math.random()*table.width/2 - table.width/4;
        var newY = table.height/2 + Math.random()*table.height/2 - table.height/4;
        var newR = Math.random()*60 + card.rotation - 30;
        var pt = table.localToLocal(newX, newY, myCards);

        createjs.Tween.get(card, {loop: false})
            .to({y: -card.height}, 200)
            .to({x: pt.x, y: pt.y, rotation: newR}, 100).call(function(){
                var newCard = card.clone(true);
                newCard.x = newX;
                newCard.y = newY;
                newCard.rotation = newR;
                newCard.scaleX = card.scale*0.5;
                newCard.scaleY = card.scale*0.5;
                table.addCard(newCard);
                this.parent.removeChild(card);
                myCards.arrange();
            });
    });
    this.addChild(card);
} ;

p.arrange = function() {
    if(this.numChildren == 0)
        return;
    var stepX = this.width/this.numChildren*0.6;
    var stepY = this.height/this.numChildren*1.2;
    var stepR = (30 - this.numChildren)*0.5;
    var actualWidth = (this.numChildren - 1)*stepX + this.getChildAt(0).width;
    var px = (this.width - actualWidth)/2 + this.width*0.5;
    var py = this.numChildren/2*stepY;
    var pr = -(this.numChildren - 1)/2*stepR;
    for (var i = 0, len = this.numChildren; i < len; i++) {
        this.getChildAt(i).x = px;
        this.getChildAt(i).y = py;
        this.getChildAt(i).oriX = px;
        this.getChildAt(i).oriY = py;
        this.getChildAt(i).rotation = pr;
        px += stepX;
        if (i < len/2 - 2)
        {
            py -= stepY;
        }
        else if(i >= len/2 + 1 - len%2)
        {
            py += stepY;
        }
        pr += stepR;
    }
    stage.update();
} ;

window.Hand = createjs.promote(Hand, "Container");
}());
