console.log("main js called");

// setting the canvas (orange rectangle) on the site
var myT = new ControlObject(canvas,300,25,470,550); 

function animate(){

    ctx.clearRect(0,0, width, height);
    myT.update();

 

    window.requestAnimationFrame(animate);
}

// telling the program to animate
animate();