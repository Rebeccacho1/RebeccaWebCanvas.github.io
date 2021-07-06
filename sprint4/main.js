console.log("main js called");

// setting the canvas (orange rectangle) on the site
var myT = new ControlObject(canvas,275,25,490,550); 
// Buttons for each shape
var B1 = new Buttons(40, 25, 200, 50, "Rectangle", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B2 = new Buttons(40, 85, 200, 50, "Ellipse", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");

//loop for my colour swatches
colourgrids = [];
var s = 25;
for(var i = 0; i < colArray.length; i++){
    for(var j = 0; j < colArray[i].length; j++){
        var temp = new Colourgrid(30+j*s, 150+i*s, s, s, colArray[0][2], colArray[i][j], colArray[0][3]);
        colourgrids.push(temp);
    }
}
// Calling the colour swatches onto the canvas
var C1 = new Colourgrid(10,40,30,30, colArray[0][2], colArray[0][1], colArray[0][3]);

function animate(){
    // The background rectangle which the drawing will happen
    ctx.clearRect(0,0, width, height);
    myT.update();
    B1.update();
    B2.update();
    
    for(var i = 0; i < colourgrids.length; i++){
        colourgrids[i].update();
    }
    window.requestAnimationFrame(animate);
}
// telling the program to animate
animate();