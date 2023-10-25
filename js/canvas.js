
let canvas = document.querySelector('.canvasTree');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 1;

let degToRad = Math.PI / 180.0;
let depth = 12;

function drawLine(x1, y1, x2, y2, bightness){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
}


function drawTree(x1, y1, angle, depth){
    if(depth !== 0){
        let x2 = x1 + (Math.cos(angle * degToRad)* depth * 5.0);
        let y2 = y1 + (Math.sin(angle * degToRad) * depth * 5.0);
        drawLine(x1, y1, x2 , y2, depth);
        drawTree(x2, y2, angle - 20 , depth -1);
        drawTree(x2, y2, angle + 20 , depth -1);
    }
}



    ctx.clearRect(canvas.width, canvas.height, 0, 0);
    ctx.beginPath();
    drawTree(canvas.width / 2 ,canvas.height, -90, depth);
    ctx.closePath();
    ctx.stroke();
    




