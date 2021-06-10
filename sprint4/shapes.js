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

class Ellipse{
    constructor(centreX, centreY, rw, rh, colour){
        this.x = centreX + rw/2;
        this.y = centreY + rh/2;
        this.rw = Math.abs(rw/2);
        this.rh = Math.abs(rh/2);
        this.fill = colour;
        console.log(this.fill)
    }

    draw(){
        ctx.beginPath();
        //ctx.ellipse(this.x, this.y, this.rw, this.rh, this.fill);
        ctx.ellipse(this.x, this.y, this.rw, this.rh, 0, 0, 2*Math.PI);
        //ctx.ellipse(200, 300, 100, 50, 0, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    update(){
        this.draw();
    }
}