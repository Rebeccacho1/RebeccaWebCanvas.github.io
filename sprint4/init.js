console.log(" init js is called ");

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
    [
    "rgba(255, 251, 160 ,1)", "rgba(0, 0, 0, 1)", "rgba(0,0,0,1)", 
    "rgba(200,200,120,1)","rgba(255,204,51,1)","rgba(51,51,255,1)",
    "rgba(255,102,102,1)","rgba(255,255,153,1)","rgba(0,153,204,1)"
    ],
    [
    "rgba(255, 251, 160, 0.5)", "rgba(0, 0, 0, 0.5)", "rgba(0,0,0,0.5)", 
    "rgba(200,200,120,0.5)","rgba(255,204,51,0.5)","rgba(51,51,255,0.5)",
    "rgba(255,102,102,0.5)","rgba(255,255,153,0.5)","rgba(0,153,204,0.5)"
    ],
    [
    "rgba(255, 251, 160, 0.1)", "rgba(0, 0, 0, 0.1)", "rgba(0,0,0,0.1)", 
    "rgba(200,200,120,0.1)","rgba(255,204,51,0.1)","rgba(51,51,255,0.1)",
    "rgba(255,102,102,0.1)","rgba(255,255,153,0.1)","rgba(0,153,204,0.1)"
    ]
];