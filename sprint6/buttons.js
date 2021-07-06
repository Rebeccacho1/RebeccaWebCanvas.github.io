console.log("button js called");

// Contructor for the buttons
class Buttons{
    constructor(x,y,w,h,text,c1,c2,c3){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
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

// When the mouse is clicking - what will happen
    mClick(e){
    // if the mouse is clicking, it would change the button to be able to draw a rectangle or an ellipse
    // and also be able to draw the shapes
        if(this.inBounds){
            this.clicked = true;
            Buttons.shape_name = this.text;
        }
    }

// When the mouse is moving around, the program would check if the mouse is inbounds or not
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

// the function for the background rectangle - inbounds: like what will happen if it's in bounds and when it's not
    inBoundsCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }
        else{
            return false;
        }
    }

// update function
    update(){
        this.draw();
    }

// the draw function
    draw(){
        // tells the program what to make the rectangle look like. The design/looks of the rectangle and ellipse
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);

        // only allows to draw a rectangle from inbounds
        if(this.inBounds){
            ctx.lineWidth = 1;
            ctx.fillStyle = this.over;
            ctx.fill();
            ctx.fillStyle = this.fill;
        }
        else

        ctx.fill();
        ctx.stroke();

        // the text styles and format
        ctx.fillStyle = this.outline;
        var myFont = "15px 'Trebuchet MS', 'Verdana', sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = myFont;
        ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
    }
}
Buttons.shape_name = "";