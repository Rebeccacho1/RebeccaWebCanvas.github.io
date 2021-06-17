console.log("rectangle js called");

// This javascript file holds the basic variables for a rectangle to be produced
class Rectangle{
// Constructor for the Rectangle - what each letter is and needed to make a rectangle
    constructor(x,y,w,h,C1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = C1;
    }

// the draw function
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
    
// update function
    update(){
// uses the draw function and updates it
        this.draw();
    }
}

// This class holds the basic variable for an ellipse to be produced
class Ellipse{
    // constructor for the ellipse - tells the program what each letter is 
        constructor(centreX, centreY, rw, rh, colour){
            this.x = centreX + rw/2;
            this.y = centreY + rh/2;
            this.rw = Math.abs(rw/2);
            this.rh = Math.abs(rh/2);
            this.fill = colour;
        }
    
    // when the mouse is being dragged across the canvas, this is the code to tell the program that it is drawing the shape
    // also tells the program whether to fill the colour or not
        draw(){
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.rw, this.rh, 0, 0, 2*Math.PI);
            ctx.fillStyle = this.fill;
            ctx.fill();
        }
    
    // the update function
        update(){
            // uses the draw function and updates it
            this.draw();
        }
    }
    
// This class holds the basic variable for an ellipse to be produced
class Star{
    constructor(xC, yC, w, h, n, c1){
        this.xC = Math.abs(xC + w/2);
        this.yC = Math.abs(yC + h/2);
        this.w = w;
        this.h = h;
        this.n = n;
        this.fillcolour = c1
    }

    update(){
        this.draw();
    }

    draw(){
        var n = 2*this.n;
        var x = 0;
        var y = 0;
        var R = Math.min(Math.abs(this.w),Math.abs(this.h))/2;
        var R_small = R/2;
        ctx.fillStyle = this.fillcolour;
        ctx.lineWidth = 0;
        ctx.beginPath();
        for(var i=0; i<n; i++){
           if(i%2 == 0){
            x = Math.round(this.xC + R_small*Math.cos(i*2*Math.PI/n));
            y = Math.round(this.yC + R_small*Math.sin(i*2*Math.PI/n));
           }
           else{
            x = Math.round(this.xC + R*Math.cos(i*2*Math.PI/n));
            y = Math.round(this.yC + R*Math.sin(i*2*Math.PI/n));
           }
            
            if(i == 0){
                ctx.moveTo(x,y); 
            }
            else{
                ctx.lineTo(x,y);
            }
        }
        ctx.closePath();
        ctx.fill();
    }
}

class Hexagon{
    constructor(xC, yC, w, h, n, c1){
        this.xC = Math.abs(xC + w/2);
        this.yC = Math.abs(yC + h/2);
        this.w = w;
        this.h = h;
        this.n = n;
        this.fillColour = c1;
    }

    update(){
        this.draw();
    }

    draw(){
        var n = this.n;
        var x = 0;
        var y = 0;
        var R = Math.min(Math.abs(this.w),Math.abs(this.h))/2;
        ctx.fillStyle = this.fillColour;
        ctx.lineWidth =  0;
        ctx.beginPath();
        for(var i=0; i<n; i++){
            x = Math.round(this.xC + R*Math.cos(i*2*Math.PI/n));
            y = Math.round(this.yC + R*Math.sin(i*2*Math.PI/n));
            if(i == 0){
                ctx.moveTo(x,y); 
            }
            else{
                ctx.lineTo(x,y);
            }
        }
        ctx.closePath();
        ctx.fill();
    }
}


