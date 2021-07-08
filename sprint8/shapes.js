console.log("rectangle js called");

// This javascript file holds the basic variables for a rectangle to be produced
class Rectangle{
// Constructor for the Rectangle - what each letter is and needed to make a rectangle
    // Rectangle: X , Y, w, h, C1(rgb string)
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
        // Hexagon: centreX , centreY, rw, rh, colour(rgb string)
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
class PulsingEllipse{
    // constructor for the ellipse - tells the program what each letter is 
        // Hexagon: centreX , centreY, rw, rh, colour(rgb string)
        constructor(centreX, centreY, rw, rh, colour){
            this.x = centreX + rw/2;
            this.y = centreY + rh/2;
            this.rw = Math.abs(rw/2);
            this.rh = Math.abs(rh/2);
            this.fill = colour;
            this.counter = 0;
        }
    
    // when the mouse is being dragged across the canvas, this is the code to tell the program that it is drawing the shape
    // also tells the program whether to fill the colour or not
        draw(){
            ctx.beginPath();
            // movement of the animated ellipse. Moves with the cos unit circle and sin unit circle
            ctx.ellipse(this.x, this.y, 0.5*this.rw*Math.cos(0.05*this.counter)+ 0.5*this.rw, 0.5*this.rh*Math.sin(0.05*this.counter)+ 0.5*this.rh, 0, 0, 2*Math.PI);
            ctx.fillStyle = this.fill;
            ctx.fill();
        }
    
    // the update function
        update(){
            // uses the draw function and updates it
            this.draw();
            this.counter += 1;
        }
    }
    
// This class holds the basic variable for an ellipse to be produced
class Star{
    // Star: xC , yC, w, h, n, c1(rgb string)
    constructor(xC, yC, w, h, n, c1){
        //Math.abs is the absolute value - so it can always be positive
        this.xC = Math.abs(xC + w/2);
        this.yC = Math.abs(yC + h/2);
        this.w = w;
        this.h = h;
        this.n = n;
        this.fillcolour = c1;
    }

// the update function
    update(){
        // uses the draw function and updates it
        this.draw();
    }
// the star is drawn by a small circle (R_small), the inner points 
//meet the small cirle and points going outside touches the larger circle.
    draw(){
        var n = 2*this.n;
        var x = 0;
        var y = 0;
        //Maths.min is the lowest value from the this.w and this.h
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

// This class holds the basic variable for a Hexagon to be produced
// A hexagon is similar to a star
class Hexagon{
    // Hexagon: xC , yC, w, h, n, c1(rgb string)
    constructor(xC, yC, w, h, n, c1){
        this.xC = Math.abs(xC + w/2);
        this.yC = Math.abs(yC + h/2);
        this.w = w;
        this.h = h;
        this.n = n;
        this.fillColour = c1;
    }

// the update function
    update(){
    // uses the draw function and updates it
        this.draw();
    }

    // the hexagon is drawn by a large circle and the 'n' tells the program the number of sides the hexagon should have.
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

// A new class creating a line 
class Line{
    // Line: x1 , y1, x2, y2, lw, col(rgb string)
    constructor(x1, y1, x2, y2, lw, col){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.lw = lw;
        this.fillColour = col;
    }

    // the line is drawn by connecting the x1 & y1 coordinates to x2 & x2 coordinates.
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x1,this.y1);
        ctx.lineTo(this.x2,this.y2);
        ctx.strokeStyle = this.fillColour;
        ctx.lineWidth = this.lw;
        ctx.stroke();
    }

    // the update function
    update(){
        // uses the draw function and updates it
            this.draw();
        }
}

// A new class creating a text
class Texts{
    // Texts: x , r, w, h, text, c1(rgb string)
    constructor(x, y, w, h, text, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.col = c1;
    }

    // the update function
    update(){
        // uses the draw function and updates it
        this.draw();
    }

    // the format of the text, what size?, what style?, what colour? - all been set here
    draw(){
        var myFont= "18px Arial";
        ctx.fillStyle = this.col;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = myFont;
        ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
    }
}