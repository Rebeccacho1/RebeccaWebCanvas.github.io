console.log("button js called");

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

    mClick(e){
        console.log("Clicked");
        if(this.inBounds){
            this.clicked = true;
            Buttons.shape_name = this.text 
        }
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.inBounds = this.inBoundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        //console.log(this.inBounds);
    }

    inBoundsCheck(xM, yM, x, y, w, h){
        if(xM > x && xM < x+w && yM > y && yM < y+h){
            return true;
        }
        else{
            return false;
        }
    }

    update(){
        this.draw();
    }

    draw(){
        ctx.strokeStyle = this.outline;
        ctx.fillStyle = this.fill;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);

        if(this.inBounds){
            ctx.lineWidth = 1;
            ctx.fillStyle = this.over;
            ctx.fill();
            ctx.fillStyle = this.fill;
        }
        else

        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = this.outline;
        var myFont = "bold 20px, Trebuchet MS', 'Verdana', sans-serif";
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = myFont;
        ctx.fillText(this.text, this.x + this.w/2, this.y + this.h/2);
    }
}
