console.log("rectangle js called");

// This class holds the basic variables for a rectangle to be produced
class Rectangle{
// Constructor for the Rectangle - what each letter is and needed to make a rectangle
    constructor(x,y,w,h,C1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = C1;
    }

// when the mouse is being dragged while the mouse is being clicked across the canvas, this is the code to tell the program that it is drawing a rectangle
// or whether to fill the colour or not
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
        console.log(this.fill);
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
