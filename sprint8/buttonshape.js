console.log("buttonshape js");

// A new class creating the circle buttons
class circleButton{
    // CircleButton: x, y, r, text, c1(rgb string), c2(rgb string)
    constructor(x, y, r, text, c1, c2){
        this.x = x;
        this.y = y;
        this.r = r;
        this.text = text;
        this.outline = c1;
        this.line = c2;

        this.element = canvas;
        this.element.addEventListener('click', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));

        this.xMouse = 0;
        this.yMouse = 0;
        this.inBounds = false;
        this.outline_stroke = 2;
    }
// When the mouse clicked down
    mClick(e){
        //if the mouse is being clicked down within the boundary - it would allow the button to be clicked
        if(this.inBounds){
            circleButton.selected = this.text;
            Buttons.shape_name = "";
        }
    }
// when the mouse is moving on the mousepad
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        // it checked wether the mouse is in bounds or not
        this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.r);
        // if the mouse is hovering something that is in bounds - the outline stroke width would change size
        if(this.inBounds == true){
            this.outline_stroke = 4;
        }
        else{
            this.outline_stroke = 2;
        }
    }
// checks if your mouse is within bounds of the circle or not. 
    inBoundsCheck(xM,yM,x,y,r){
        var d = Math.sqrt(Math.pow(xM-x, 2) + Math.pow(yM-y, 2));
        // if d is less than r, the mouse is in between the bounds
        if(d<r){
            return true;
        }
        else{
            return false;
        }
    }

// updates what's in the class
    update(){
        ctx.beginPath();
        ctx.lineWidth = this.outline_stroke
        ctx.ellipse(this.x, this.y, Math.abs(this.r), Math.abs(this.r), 0, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.outline;
        ctx.stroke();
        ctx.fill();
    }
}
circleButton.selected = "";