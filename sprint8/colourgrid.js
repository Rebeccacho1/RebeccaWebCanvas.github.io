console.log("colourgrid js called");

// Contructor for the colour swatches
class Colourgrid{
    constructor(x,y,w,h,c1,c2,c3){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.outline = c1;
        this.fill = c2;
        this.over = c3;
        this.xMouse = 0;
        this.yMouse = 0;
        this.inBounds = false;
        this.clicked = false;
        canvas.addEventListener('click', this.mClick.bind(this));
        canvas.addEventListener('mousemove', this.mMove.bind(this));
    }

// When the mouse clicked down
    mClick(e){
        // the mouse clicked down from in-bounds, it would allow the user to create a shape
        if(this.inBounds){
            this.clicked = true;
            Colourgrid.colours = this.fill;
        }
        console.log(Colourgrid.colours);
    }

// when the mouse is moving on the mousepad
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

// telling where the inbounds is on the canvas. 
    inBoundsCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }
        else{
            return false;
        }
    }

//the little coloured squares for the swatch
    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;

       // When the mouse hovers or moves in the coloured square, it will change the outline
        if(this.inBounds){
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.over;
            ctx.fill();
            ctx.fillStyle = this.fill;
        }

        ctx.fill();
        ctx.stroke();
    }

    // update function
    update(){
        this.draw();
    }
}
// default colour - White
Colourgrid.colours = "rgb(255,255,255)"
