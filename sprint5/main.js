console.log("main js called");

// Buttons for each shape
var B1 = new Buttons(30, 25, 100, 50, "Rectangle", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B2 = new Buttons(150, 25, 100, 50, "Ellipse", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B3 = new Buttons(30, 85, 100, 50, "Star", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B4 = new Buttons(150, 85, 100, 50, "Hexagon", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B5 = new Buttons(30, 145, 100, 50, "Line", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Button for Clearing the canvas
var B6 = new Buttons(30, 300, 100, 50, "Clear", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Button for Undoing What the user had drawn on the canvas
var B7 = new Buttons(150,300, 100, 50, "Undo", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");

// setting the canvas (orange rectangle) on the site
var myT = new ControlObject(canvas,275,25,490,550); 

// loop for my colour swatches
colourgrids = [];
var s = 25;
for(var i = 0; i < colArray.length; i++){
    for(var j = 0; j < colArray[i].length; j++){
        var temp = new Colourgrid(30+j*s, 210+i*s, s, s, "rgb(139,139,139)", colArray[i][j], colArray[0][3]);
        colourgrids.push(temp);
    }
}
// Calling the colour swatches onto the canvas
var C1 = new Colourgrid(10,40,30,30, "rgb(139,139,139)", colArray[0][1], "rgb(185,197,202)");
function animate(){
    // The background rectangle which the drawing will happen
    ctx.clearRect(0,0, width, height);
    myT.update();
    B1.update();
    B2.update();
    B3.update();
    B4.update();
    B5.update();
    B6.update();
    B7.update();

    for(var i = 0; i < colourgrids.length; i++){
        colourgrids[i].update();
    }
    window.requestAnimationFrame(animate);
}
// telling the program to animate
animate();