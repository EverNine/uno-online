(function() {

    function Card(n,c) {
        this.Container_constructor();
        this.width = 200;
        this.height = 300;
        this.regX = 100;
        this.regY = 150;
        this.scale = globalScale;
        this.scaleX = globalScale;
        this.scaleY = globalScale;
        this.oriX = null;
        this.oriY = null;
        this.turn(n,c);
    };

    var p = createjs.extend(Card, createjs.Container);

    p.turn = function(n,c){
        if(typeof(n) == "undefined")
        {
            this.drawback(0);
            return;
        }
        switch(c)
        {
            case 0:
                this.color = "Black";
                break;
            case 1:
                this.color = "DeepSkyBlue";
                break;
            case 2:
                this.color = "Red";
                break;
            case 3:
                this.color = "Green";
                break;
            case 4:
                this.color = "Yellow";
                break;
            default:
                break;
        }
        this.number = n;
        if(n >= 0)
            this.setup();
        else
            this.spSetup();
    };

    p.drawback = function(x){
        var background = new createjs.Shape();
        var backline = new createjs.Shape();
        backline.graphics.beginStroke("Black").drawRoundRect(-10,-15,this.width+20,this.height+30,10);
        background.graphics.beginFill("White").drawRoundRect(-10,-15,this.width+20,this.height+30,10);
        background.shadow = new createjs.Shadow("#000000", 4, 4, 3);
        var rect = new createjs.Shape();
        var ellipse = new createjs.Shape();
        if(x == 0)
        {
            rect.graphics.beginFill("Black").drawRoundRect(0,0,this.width,this.height,10);

            ellipse.graphics.beginFill("Red").drawCircle(130,80,70);
            ellipse.skewX = 25;
            ellipse.scaleY = 2.1;
            ellipse.scaleX = 1.3;
            ellipse.mask = rect;
        }
        else if(x > 0)
        {
            rect.graphics.beginFill(this.color).drawRoundRect(0,0,this.width,this.height,10);

            ellipse.graphics.beginFill("White").drawCircle(130,80,70);
            ellipse.skewX = 25;
            ellipse.scaleY = 2.1;
            ellipse.scaleX = 1.3;
            ellipse.mask = rect;
        }
        else
        {
            rect.graphics.beginFill("Black").drawRoundRect(0,0,this.width,this.height,10);

            ellipse.graphics.beginFill("White").drawCircle(130,80,70);
            ellipse.skewX = 25;
            ellipse.scaleY = 2.1;
            ellipse.scaleX = 1.3;
            ellipse.mask = rect;
        }
        this.addChild(backline, background, rect, ellipse);
        if(x == 0)
        {
            var text = new createjs.Text("UNO", "Bold 70px Arial", "Yellow");
            text.x = 15;
            text.y = 145;
            text.rotation = -25;
            text.shadow = new createjs.Shadow("#000000", 8, 8, 5);
            this.addChild(text);
        }
    };

    p.setup = function() {
        this.drawback(1);
        var text = new createjs.Text(this.number, "Italic Bold " + (this.height/2).toString() + "px Arial",this.color);
        text.x = this.width/4;
        text.y = this.height/5;
        text.shadow = new createjs.Shadow("#000000", 4, 4, 3);
        var smallText1 = new createjs.Text(this.number, "Italic Bold " + (this.height/10).toString() + "px Arial", "white");
        smallText1.x = 5;
        smallText1.y = 5;
        smallText1.shadow = new createjs.Shadow("#000000", 2, 2, 1);
        var smallText2 = smallText1.clone();
        smallText2.rotation = 180;
        smallText2.x = this.width - 5;
        smallText2.y = this.height - 5;
        this.addChild(text, smallText1, smallText2);
        if(this.number == 6 || this.number == 9)
        {
            text.y = text.y - 10;
            var r = new createjs.Shape();
            r.graphics.beginFill(this.color).drawRect(55,200,75,10);
            r.shadow = new createjs.Shadow("#000000", 4, 4, 3);
            var r1 = new createjs.Shape();
            r1.graphics.beginFill("White").drawRect(5,35,17,3);
            r1.shadow = new createjs.Shadow("#000000", 2, 2, 1);
            var r2 = r1.clone();
            r2.x = 173;
            r2.y = 227;
            this.addChild(r,r1,r2);
        }
    };

    p.spSetup = function() {
        if(this.number < -2)
            this.drawback(1);
        else
            this.drawback(-1);
        switch(this.number)
        {
            case -1:
                var x1 = 135;
                var y1 = 155;
                var x2 = 165;
                var y2 = 105;
                var x3 = 125;
                var y3 = 75;
                var x4 = 95;
                var y4 = 115;
                var w = 45;
                var h = 85;
                var offsetX = 4;
                var offsetY = 6;
                var r = 3;

                bk = new createjs.Shape();
                center = new createjs.Shape();
                centerline = new createjs.Shape();
                center2 = new createjs.Shape();
                centerline2 = new createjs.Shape();
                center3 = new createjs.Shape();
                centerline3 = new createjs.Shape();
                center4 = new createjs.Shape();
                centerline4 = new createjs.Shape();

                centerline.graphics.beginStroke("Black").beginFill("White").drawRoundRect(x1,y1,w,h,r);
                bk.graphics.beginFill("White").drawRoundRect(x1,y1,w,h,r);
                center.graphics.beginFill("Yellow").drawRoundRect(x1+offsetX,y1+offsetY,w-2*offsetX,h-2*offsetY,r);
                centerline2.graphics.beginStroke("Black").beginFill("White").drawRoundRect(x2,y2,w,h,r);
                bk.graphics.beginFill("White").drawRoundRect(x2,y2,w,h,r);
                center2.graphics.beginFill("Green").drawRoundRect(x2+offsetX,y2+offsetY,w-2*offsetX,h-2*offsetY,r);
                centerline3.graphics.beginStroke("Black").beginFill("White").drawRoundRect(x3,y3,w,h,r);
                bk.graphics.beginFill("White").drawRoundRect(x3,y3,w,h,r);
                center3.graphics.beginFill("DeepSkyBlue").drawRoundRect(x3+offsetX,y3+offsetY,w-2*offsetX,h-2*offsetY,r);
                centerline4.graphics.beginStroke("Black").beginFill("White").drawRoundRect(x4,y4,w,h,r);
                bk.graphics.beginFill("White").drawRoundRect(x4,y4,w,h,r);
                center4.graphics.beginFill("Red").drawRoundRect(x4+offsetX,y4+offsetY,w-2*offsetX,h-2*offsetY,r);
                center.skewX = 20;
                centerline.skewX = 20;
                center2.skewX = 20;
                centerline2.skewX = 20;
                center3.skewX = 20;
                centerline3.skewX = 20;
                center4.skewX = 20;
                centerline4.skewX = 20;
                bk.skewX = 20;
                bk.shadow = new createjs.Shadow("#000000", 2, 2, 1);
                this.addChild(bk, centerline, center, centerline2, center2, centerline3, center3, centerline4, center4);
                var smallText1 = new createjs.Text("+4", "Italic Bold " + (this.height/10).toString() + "px Arial", "white");
                smallText1.x = 5;
                smallText1.y = 5;
                var smallText2 = smallText1.clone();
                smallText2.rotation = 180;
                smallText2.x = this.width - 5;
                smallText2.y = this.height - 5;
                this.addChild(smallText1, smallText2);
                break;
            case -2:
                var cx = 130;
                var cy = 80;
                var r = 60;

                var a = new createjs.Shape();

                a.graphics.beginFill("Red").arc(cx, cy, r, 0, Math.PI/2).lineTo(cx,cy);
                a.graphics.beginFill("DeepSkyBlue").arc(cx, cy, r, Math.PI/2, Math.PI).lineTo(cx,cy);
                a.graphics.beginFill("Green").arc(cx, cy, r, Math.PI, Math.PI*3/2).lineTo(cx,cy);
                a.graphics.beginFill("Yellow").arc(cx, cy, r, Math.PI*3/2, 0).lineTo(cx,cy);
                a.skewX = 25;
                a.scaleY = 2.1;
                a.scaleX = 1.3;

                var b = new createjs.Shape();
                cx = 24;
                cy = 12;
                r = 8;

                b.graphics.beginFill("White").drawCircle(cx,cy,r+1);
                b.graphics.beginFill("Green").arc(cx, cy, r, 0, Math.PI/2).lineTo(cx,cy);
                b.graphics.beginFill("Yellow").arc(cx, cy, r, Math.PI/2, Math.PI).lineTo(cx,cy);
                b.graphics.beginFill("Red").arc(cx, cy, r, Math.PI, Math.PI*3/2).lineTo(cx,cy);
                b.graphics.beginFill("DeepSkyBlue").arc(cx, cy, r, Math.PI*3/2, 0).lineTo(cx,cy);
                b.skewX = 25;
                b.scaleY = 2.1;
                b.scaleX = 1.3;

                var c = new createjs.Shape();
                cx = 237;
                cy = 145;
                r = 8;

                c.graphics.beginFill("White").drawCircle(cx,cy,r+1);
                c.graphics.beginFill("Red").arc(cx, cy, r, 0, Math.PI/2).lineTo(cx,cy);
                c.graphics.beginFill("DeepSkyBlue").arc(cx, cy, r, Math.PI/2, Math.PI).lineTo(cx,cy);
                c.graphics.beginFill("Green").arc(cx, cy, r, Math.PI, Math.PI*3/2).lineTo(cx,cy);
                c.graphics.beginFill("Yellow").arc(cx, cy, r, Math.PI*3/2, 0).lineTo(cx,cy);
                c.skewX = 25;
                c.scaleY = 2.1;
                c.scaleX = 1.3;

                this.addChild(a,b,c);
                break;
            case -3:
                bk = new createjs.Shape();
                center = new createjs.Shape();
                centerline = new createjs.Shape();
                center2 = new createjs.Shape();
                centerline2 = new createjs.Shape();

                centerline.graphics.beginStroke("Black").beginFill("White").drawRoundRect(140,75,55,100,3);
                bk.graphics.beginFill("White").drawRoundRect(140,75,55,100,3);
                center.graphics.beginFill(this.color).drawRoundRect(140+4,75+6,55-8,100-12,3);
                centerline2.graphics.beginStroke("Black").beginFill("White").drawRoundRect(115,135,55,100,3);
                bk.graphics.beginFill("White").drawRoundRect(115,135,55,100,3);
                center2.graphics.beginFill(this.color).drawRoundRect(115+4,135+6,55-8,100-12,3);
                center.skewX = 20;
                centerline.skewX = 20;
                center2.skewX = 20;
                centerline2.skewX = 20;
                bk.skewX = 20;
                bk.shadow = new createjs.Shadow("#000000", 2, 2, 1);
                this.addChild(bk, centerline, center, centerline2, center2);
                var smallText1 = new createjs.Text("+2", "Italic Bold " + (this.height/10).toString() + "px Arial", "white");
                smallText1.x = 5;
                smallText1.y = 5;
                smallText1.shadow = new createjs.Shadow("#000000", 2, 2, 1);
                var smallText2 = smallText1.clone();
                smallText2.rotation = 180;
                smallText2.x = this.width - 5;
                smallText2.y = this.height - 5;
                this.addChild(smallText1, smallText2);
                break;
            case -4:
                var sign1 = new createjs.Shape();
                var sign2 = new createjs.Shape();
                var sign3 = new createjs.Shape();
                sign1.graphics.beginFill(this.color).drawCircle(100,150,60);
                sign2.graphics.beginFill("White").drawCircle(100,150,45);
                sign3.graphics.beginFill(this.color).drawRect(50,142,100,18);

                sign1.shadow = new createjs.Shadow("#000000", 2, 2, 1);
                sign2.shadow = new createjs.Shadow("#000000", -2, -2, 1);
                sign3.shadow = new createjs.Shadow("#000000", 2, 2, 1);

                sign1.rotation = -45;
                sign1.skewX = 5;
                sign1.x = -74;
                sign1.y = 110;
                sign2.rotation = -45;
                sign2.skewX = 5;
                sign2.x = -74;
                sign2.y = 110;
                sign3.rotation = -45;
                sign3.skewX = 5;
                sign3.x = -74;
                sign3.y = 110;
                var t = sign2.clone();
                t.x = t.x - 3;
                t.y = t.y + 1;
                t.scaleX = 1.03;
                t.scaleY = 1.03;
                sign3.mask = t;
                this.addChild(sign1,sign2,sign3);

                var cont = new createjs.Container();

                sign1 = new createjs.Shape();
                sign2 = new createjs.Shape();
                sign3 = new createjs.Shape();
                sign1.graphics.beginFill("White").drawCircle(15,15,12);
                sign2.graphics.beginFill(this.color).drawCircle(15,15,8);
                sign3.graphics.beginFill("White").drawRect(5,13,20,3);

                sign1.shadow = new createjs.Shadow("#000000", 0.5, 0.5, 1);
                sign2.shadow = new createjs.Shadow("#000000", -0.5, -0.5, 1);
                sign3.shadow = new createjs.Shadow("#000000", 0.5, 0.5, 1);

                sign1.rotation = -45;
                sign1.skewX = 5;
                sign1.x = -3;
                sign1.y = 19;
                sign2.rotation = -45;
                sign2.skewX = 5;
                sign2.x = -3;
                sign2.y = 19;
                sign3.rotation = -45;
                sign3.skewX = 5;
                sign3.x = -3;
                sign3.y = 19;
                var t = sign2.clone();
                t.y = t.y + 1;
                t.scaleX = 1.05;
                t.scaleY = 1.05;
                sign3.mask = t;
                //this.addChild(sign1,sign2,sign3);
                cont.addChild(sign1,sign2,sign3);
                this.addChild(cont);

                var cont2 = cont.clone(true);
                cont2.x = 165;
                cont2.y = 263;
                this.addChild(cont2);
                break;
            case -5:
                var arrow1 = new createjs.Shape();
                arrow1.graphics.beginFill(this.color).moveTo(141,88).lineTo(133,135).lineTo(122,120).lineTo(80,156).arcTo(73,132,82,119,30).lineTo(104,101).lineTo(92,87).lineTo(141,88);
                arrow1.shadow = new createjs.Shadow("#000000",5,5,5);
                var arrow2 = arrow1.clone();
                arrow2.rotation = 180;
                arrow2.x = 193;
                arrow2.y = 293;
                this.addChild(arrow1,arrow2);

                arrow1 = new createjs.Shape();
                arrow1.graphics.beginFill("White").moveTo(141,88).lineTo(133,135).lineTo(122,120).lineTo(80,156).arcTo(73,132,82,119,30).lineTo(104,101).lineTo(92,87).lineTo(141,88);
                arrow1.shadow = new createjs.Shadow("#000000",3,3,1);
                arrow2 = arrow1.clone();
                arrow2.rotation = 180;
                arrow2.x = 193;
                arrow2.y = 293;

                var con1 = new createjs.Container();
                con1.addChild(arrow1,arrow2);
                con1.scaleX = 0.2;
                con1.scaleY = 0.2;
                con1.x = -3;
                con1.y = -7;
                this.addChild(con1);

                var con2 = con1.clone(true);
                con2.x = 163;
                con2.y = 249;
                this.addChild(con2);

                break;
            default:
                break;
        }
    };

    window.Card = createjs.promote(Card, "Container");
}());
