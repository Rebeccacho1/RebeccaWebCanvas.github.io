console.log("main js called");

var myT = new ControlObject(canvas,275,25,490,550); 
var B1 = new Buttons(40, 100, 200, 50, "Rectangle", colArray[2], colArray[3], colArray[0]);
var B2 = new Buttons(40, 180, 200, 50, "Ellipse", colArray[2], colArray[3], colArray[0]);
var E = new Ellipse(200, 200, -200, -200, colArray[4]);

function animate(){
    // The background rectangle which the drawing will happen

    ctx.clearRect(0,0, width, height);
    myT.update();
    B1.update();
    B2.update();
    //E.update();


 

    window.requestAnimationFrame(animate);
}

animate();