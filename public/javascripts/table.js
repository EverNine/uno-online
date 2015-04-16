(function() {

function Table(x, y, w, h) {
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
var p = createjs.extend(Table, createjs.Container);


p.setup = function() {
} ;

p.addCard = function(card) {
    this.addChild(card);
} ;

window.Table = createjs.promote(Table, "Container");
}());
