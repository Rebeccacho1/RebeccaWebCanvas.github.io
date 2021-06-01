console.log("main js called");

var myT = new ControlObject(canvas,300,25,470,550); 

function animate(){
    // The background rectangle which the drawing will happen

    ctx.clearRect(0,0, width, height);
    myT.update();

 

    window.requestAnimationFrame(animate);
}

animate();