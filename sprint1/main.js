console.log("main js called");

// setting the canvas on the site
var myT = new ControlObject(canvas); 

function animate(){
    ctx.clearRect(0,0, width, height);
    myT.update();
 

    window.requestAnimationFrame(animate);
}

// telling the program to animate
animate();