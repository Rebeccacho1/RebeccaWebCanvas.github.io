console.log("control object js called");

// Constructor for the object that's going to be made on the canvas
class ControlObject{
    constructor(canvas){
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        this.w = 0;
        this.h = 0;
        
// 'addEventListener' - is there mouse movement
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

//need a list to hold all of the rectangles that get made
        this.object_set = [];
    }

// When the mouse is being pressed 'down'. 
    mDown(e){
        // e.offset X or Y is where ever the mouse is clicking on the canvas
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        console.log("mouse down event");
        //console.log("xMouse is:"+this.xMouse);
        //console.log("yMouse is:"+this.yMouse);
        //the this.mouseDown turns true, because the mouse is being pressed down
        this.mouseDown = true;
    }

// When the mouse is moving within the canvas
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //console.log(" mouse move event");
    }

// When the mouse is no longer being pressed down, so it's moving up
    mUp(e){
        //updates and the mouseDown is now false, because it's no longer being pressed down
        this.mouseDown = false;
        console.log("mouse up event");
        // create a new reactangle
        console.log(this.w);
        console.log(this.h);
        var temp = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, "rgba(233,233,233,1)");
        // push it into the object set
        this.object_set.push(temp);
        // console log the object set
        console.log(this.object_set.length);
    }

//Draws out the rectangle for mouse draging
    drawRect(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgb(200, 0, 20)";
        ctx.stroke();
    }

// drawing the rectangle on the canvas
    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h);

    }

// update function
    update(){
        // for loop - goes through the object_set list and prints out every rectangle the user wants to draw
        for(let i = 0; i < this.object_set.length; i++){
            this.object_set[i].update();
        }
        
    // finds out what the width and height measurements are, using xMouse/yMouse and the 2 startpoints
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            //console.log("mouse is down");
            this.draw();
        }
    }
}
