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

