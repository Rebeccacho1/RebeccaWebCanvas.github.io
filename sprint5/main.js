console.log("main js called");

var myT = new ControlObject(canvas,275,25,490,550); 
var B1 = new Buttons(30, 25, 100, 50, "Rectangle", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B2 = new Buttons(150, 25, 100, 50, "Ellipse", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B3 = new Buttons(30, 85, 100, 50, "Star", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B4 = new Buttons(150, 85, 100, 50, "Hexagon", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B5 = new Buttons(150, 300, 100, 50, "Clear", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");
var B6 = new Buttons(150,360, 100, 50, "Undo", "rgb(255,255,255)", "rgb(127, 146, 158)", "rgb(162, 177, 184)");

colourgrids = [];
var s = 25
for(var i = 0; i < colArray.length; i++){
    for(var j = 0; j < colArray[i].length; j++){
        var temp = new Colourgrid(30+j*s, 150+i*s, s, s, colArray[0][2], colArray[i][j], colArray[0][3])
        colourgrids.push(temp);
    }
}
var C1 = new Colourgrid(10,40,30,30, colArray[0][2], colArray[0][1], colArray[0][3]);

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

    for(var i = 0; i < colourgrids.length; i++){
        colourgrids[i].update()
    }
    window.requestAnimationFrame(animate);
}

animate();