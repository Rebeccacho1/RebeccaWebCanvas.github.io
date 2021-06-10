console.log(" init js is called ")

// basic connection code 
// shapes the canvas - provides a drawing page
canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// Array for different colours 
var colArray=[
    "rgb(255, 251, 172)", "rgb(255, 0, 0)", "rgb(4,20,140)", 
    "rgb(204,0,0)","rgb(255,204,51)","rgb(51,51,255)",
    "rgb(255,102,102)","rgb(255,255,153)", "rgb(0,153,204)"
    ]