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
    [
    "rgba(81, 32, 166 ,1)", "rgba(223, 0, 79, 1)", "rgba(250,61,26,1)", 
    "rgba(200,200,120,1)","rgba(253,180,11,1)","rgba(22,174,201,1)",
    "rgba(18,132,116,1)","rgba(77,104,119,1)","rgba(41,48,53,1)"
    ],
    [
    "rgba(81,32,166,0.5)", "rgba(223,0,79,0.5)", "rgba(250,61,26,0.5)", 
    "rgba(200,200,120,0.5)","rgba(253,180,11,0.5)","rgba(22,174,201,0.5)",
    "rgba(18,132,116,0.5)","rgba(77,104,119,0.5)","rgba(41,48,53,0.5)"
    ],
    [
    "rgba(81,32,166,0.1)", "rgba(223,0,79,0.1)", "rgba(250,61,26,0.1)", 
    "rgba(200,200,120,0.1)","rgba(253,180,11,0.1)","rgba(22,174,201,0.1)",
    "rgba(18,132,116,0.1)","rgba(77,104,119,0.1)","rgba(41,48,53,0.1)"
    ]
]