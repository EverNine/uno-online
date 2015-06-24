(function() {

  function OtherHand(n, x ,y, w, h, r, s) {
    this.Container_constructor();
    this.cardCount = n;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.scale = globalScale*s;
    this.scaleX = globalScale*s;
    this.scaleY = globalScale*s;
    this.regX = w/2;
    this.regY = h/2;
    this.rotation = r;

    this.setup();
  }

  var p = createjs.extend(OtherHand, createjs.Container);

  p.setup = function() {
    for (var i = 0, len = this.cardCount; i < len; i++) {
      this.addCard();
    }
    this.arrange();
  } ;

  p.addCard = function(){
    card = new Card();
    this.addChild(card);
  } ;

  p.playCard = function(card) {
    oldCard = this.getChildAt(this.numChildren - 1);
    var newX = table.width/2 + Math.random()*table.width/2 - table.width/4;
    var newY = table.height/2 + Math.random()*table.height/2 - table.height/4;
    var newR = Math.random()*60 + oldCard.rotation - 30;

    createjs.Tween.get(oldCard, {loop: false})
    .to({y: -card.height}, 200)
    .call(function(){
      table.addChild(card);
      var point = this.parent.localToLocal(oldCard.x, oldCard.y, table);
      card.x = point.x;
      card.y = point.y;
      card.rotation = newR;
      card.scaleX = oldCard.scale*0.5;
      card.scaleY = oldCard.scale*0.5;
      this.parent.removeChild(oldCard);

      createjs.Tween.get(card, {loop: false})
      .to({x: newX, y: newY, rotation: newR}, 100);
    });
    this.arrange();

  };

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

  window.OtherHand = createjs.promote(OtherHand, "Container");
}());
