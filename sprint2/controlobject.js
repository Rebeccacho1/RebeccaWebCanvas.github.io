console.log("control object js called");

// Constructor for the object that's going to be made on the canvas
class ControlObject{
    constructor(canvas,x,y,w,h){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

// this.w & this.h is used to calcuate the dragging boxes
        this.w = 0;
        this.h = 0;

// this.(x,y,w,h)Boundary is used for the Boundary in the rectangle
        this.xBoundary = x;
        this.yBoundary = y;
        this.wBoundary = w;
        this.hBoundary = h;

// 'addEventListener' - is there mouse movement
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

// need a list to hold all of the rectangles that get made
        this.object_set = [];

// the default for when the mouse is in the bounds (rectangle)
        this.inBounds = false;
        this.drag = false;
    }

// When the mouse is being pressed 'down'. 
    mDown(e){
        // e.offset X or Y is where ever the mouse is clicking on the canvas
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;

        // the boundary of the background rectangle
        this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.xBoundary, this.yBoundary, this.wBoundary, this.hBoundary);
        console.log(this.inBounds);
        // if the mouse pushes down inside the bounds, the red line appears - which allows the user to draw the rectangle
        if(this.inBounds == true){
            this.drag = true;
        }
        // if the mouse pushes down outside of the bounds, the red line would not appear
        else{
            this.drag = false;
        }
    }

// When the mouse is moving within the canvas
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

// creating the boundary, where the mouse can be clicked or not clicked 
    inBoundsCheck(xM, yM, x, y, w, h){
        // if the mouse clicks in the rectangle - it's either true or false
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }
       else{
           return false;
        }
   }

// When the mouse releases from the mouse pad, so your finger is being lifted up
    mUp(e){
        // drawing the rectangle 
        if(this.drag == true){
            var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, "rgba(233,233,233,1)");
            // push it into the object set
            this.object_set.push(temp);
            this.drag = false;
        }
        else{
            this.drag = false;
        }
    }

// Just a background rectangle (where it can draw) printed on the page
    backgroundRect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = "rgb(0,103,23)";
        ctx.fill(); 
    }

// Shows the outline of the canvas when the mouse is dragging
    drawRect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(233, 0, 20)";
        ctx.stroke();
    }

// the draw function - just moved it so now the code to this.draw in the update function
    draw(){
    }

// update function
    update(){
        this.backgroundRect(this.xBoundary, this.yBoundary, this.wBoundary, this.hBoundary);
        // for loop - goes through the object_set list and prints out every rectangle the user wants to draw
        for(let i = 0; i < this.object_set.length; i++){
            this.object_set[i].update();
        }
    // finds out what the width and height measurements are, using xMouse/yMouse and the 2 startpoints
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.drag){
            this.draw(this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h));
        }
    }
}
