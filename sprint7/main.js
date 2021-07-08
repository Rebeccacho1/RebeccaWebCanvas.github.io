console.log("main js called");

// setting the canvas (orange rectangle) on the site
var myT = new ControlObject(canvas,275,25,490,550); 
// Buttons for each shape
var B1 = new Buttons(30, 25, 90, 40, "Rectangle", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B2 = new Buttons(150, 25, 90, 40, "Ellipse", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Buttons for the number of sides for a pentagon
var B3 = new Buttons(20, 170, 60, 40, "3 sides", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B4 = new Buttons(80, 170, 60, 40, "4 sides", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B5 = new Buttons(140, 170, 60, 40, "5 sides", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B6 = new Buttons(200, 170, 60, 40, "6 sides", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Buttons for the number of points in a star
var B7 = new Buttons(20, 250, 60, 40, "4 points", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B8 = new Buttons(80, 250, 60, 40, "5 points", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B9 = new Buttons(140, 250, 60, 40, "6 points", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B10 = new Buttons(200, 250, 60, 40, "7 points", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B11 = new Buttons(30, 75, 90, 40, "Line", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Button for Clearing the canvas
var B12 = new Buttons(30, 525, 100, 50, "Clear", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Button for Undoing What the user had drawn on the canvas
var B13 = new Buttons(150,525, 100, 50, "Undo", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
// Text
var T1 = new Texts(15, 410, 140, 30,"Default Colour:", "rgb(255,255,255)");
var T2 = new Texts(90, 285, 90, 40, "Brush Sizes", "rgb(255,255,255)");
var T3 = new Texts(90, 115, 90, 40, "Different Pentagons", "rgb(255,255,255)");
var T4 = new Texts(90, 135, 90, 40, "(different no. of sides)", "rgb(255,255,255)");
var T5 = new Texts(100, 210, 90, 40, "Stars (different no. of points)", "rgb(255,255,255)");
//Circle Buttons - sizing of the brushes
var CB1 = new circleButton(70, 330, 5, "B1", "rgb(128,128,128", "rgb(112,128,144");
var CB2 = new circleButton(140, 330, 10, "B2", "rgb(128,128,128", "rgb(112,128,144");
var CB3 = new circleButton(210, 330, 15, "B3", "rgb(128,128,128", "rgb(112,128,144");
// loop for my colour swatches
colourgrids = [];
var s = 25;
for(var i = 0; i < colArray.length; i++){
    for(var j = 0; j < colArray[i].length; j++){
        var temp = new Colourgrid(30+j*s, 440+i*s, s, s, "rgb(139,139,139)", colArray[i][j], colArray[0][3]);
        colourgrids.push(temp);
    }
}
// Colour Square
var CG1 = new Colourgrid(150,410,25,25, "rgb(255,255,255)");

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
    B8.update();
    B9.update();
    B10.update();
    B11.update();
    B12.update();
    B13.update();

    T1.update();
    T2.update();
    T3.update();
    T4.update();
    T5.update();

    CB1.update();
    CB2.update();
    CB3.update();

    CG1.update();
    // loop which creates the length of the colourgrid with the number of colours in it
    for(var i = 0; i < colourgrids.length; i++){
        colourgrids[i].update();
    }
    window.requestAnimationFrame(animate);
}
// telling the program to animate
animate();