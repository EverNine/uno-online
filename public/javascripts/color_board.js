(function() {

  function ColorBoard(x, y) {
    this.Container_constructor();
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 300;
    this.regX = 150;
    this.regY = 150;
    this.scale = globalScale;
    this.scaleX = globalScale;
    this.scaleY = globalScale;

    this.setup();
  }

  var p = createjs.extend(ColorBoard, createjs.Container);

  p.setup = function() {
    var cx = 50;
    var cy = 50;
    var r = 160;
    a = new createjs.Shape();
    b = new createjs.Shape();
    c = new createjs.Shape();
    d = new createjs.Shape();

    a.graphics.beginFill("Red").arc(cx, cy, r, 0, Math.PI/2).lineTo(cx,cy);
    b.graphics.beginFill("DeepSkyBlue").arc(cx, cy, r, Math.PI/2, Math.PI).lineTo(cx,cy);
    c.graphics.beginFill("Green").arc(cx, cy, r, Math.PI, Math.PI*3/2).lineTo(cx,cy);
    d.graphics.beginFill("Yellow").arc(cx, cy, r, Math.PI*3/2, 0).lineTo(cx,cy);

    a.on('rollover',function(evt){
      createjs.Tween.get(a, {loop: false})
      .to({scaleX: 1.2, scaleY: 1.2}, 100);
    });

    a.on('rollout',function(evt){
      createjs.Tween.get(a, {loop: false})
      .to({scaleX: 1, scaleY: 1}, 100);
    });

    a.on('click',function(evt){
    });

    b.on('rollover',function(evt){
      createjs.Tween.get(b, {loop: false})
      .to({scaleX: 1.2, scaleY: 1.2}, 100);
    });

    b.on('rollout',function(evt){
      createjs.Tween.get(b, {loop: false})
      .to({scaleX: 1, scaleY: 1}, 100);
    });

    b.on('click',function(evt){
    });

    c.on('rollover',function(evt){
      createjs.Tween.get(c, {loop: false})
      .to({scaleX: 1.2, scaleY: 1.2}, 100);
    });

    c.on('rollout',function(evt){
      createjs.Tween.get(c, {loop: false})
      .to({scaleX: 1, scaleY: 1}, 100);
    });

    c.on('click',function(evt){
    });

    d.on('rollover',function(evt){
      createjs.Tween.get(d, {loop: false})
      .to({scaleX: 1.2, scaleY: 1.2}, 100);
    });

    d.on('rollout',function(evt){
      createjs.Tween.get(d, {loop: false})
      .to({scaleX: 1, scaleY: 1}, 100);
    });

    d.on('click',function(evt){
    });

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.addChild(this.a,this.b,this.c,this.d);
  } ;

  window.ColorBoard = createjs.promote(ColorBoard, "Container");
}());
