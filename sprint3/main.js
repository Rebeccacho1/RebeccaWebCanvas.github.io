console.log("main js called");

// setting the canvas (orange rectangle) on the site
var myT = new ControlObject(canvas,275,25,490,550); 
// Buttons for each shape
var B1 = new Buttons(40, 100, 200, 50, "Rectangle", colArray[2], colArray[3], colArray[0]);
var B2 = new Buttons(40, 180, 200, 50, "Ellipse", colArray[2], colArray[3], colArray[0]);


function animate(){
    ctx.clearRect(0,0, width, height);
    myT.update();
    B1.update();
    B2.update();

    window.requestAnimationFrame(animate);
}
// telling the program to animate
animate();