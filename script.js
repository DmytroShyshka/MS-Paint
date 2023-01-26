var canvas = document.getElementById('whiteboard');
var ctx = canvas.getContext('2d');


var brushSize = document.getElementById('brush-size');
var brushColor = document.getElementById('brush-color');

var clearButton = document.getElementById('clear-screen');

ctx.lineWidth = brushSize.value;
ctx.strokeStyle = brushColor.value;

clearButton.onclick = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var isDrawing = false;

       
        canvas.addEventListener("mousedown", startDrawing);
      
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mousemove", draw);

        brushSize.addEventListener("input", updateBrushSize);
        brushColor.addEventListener("input", updateBrushColor);

        function startDrawing(event) {
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY);
        }

        function stopDrawing() {
            isDrawing = false;
        }

        function draw(event) {
            if (isDrawing) {
                ctx.lineTo(event.clientX, event.clientY);
                ctx.stroke();
            }
        }

function updateBrushSize(event) {
    ctx.lineWidth = event.target.value;
}

function updateBrushColor(event) {
    ctx.strokeStyle = event.target.value;
}
