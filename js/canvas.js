
let canvas = document.querySelector('.canvasTree');
let ctx = canvas.getContext("2d");
ctx.lineWidth = 1;

let degToRad = Math.PI / 180.0 ;
let depth = 12;

function drawLine(x1, y1, x2, y2, bightness){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
}


function drawTree(x1, y1, angle, depth, angT ){
    if(depth !== 0){
        let x2 = x1 + (Math.cos(angle * degToRad)* depth * 2.0);
        let y2 = y1 + (Math.sin(angle * degToRad) * depth * 2.0);
        let angle1 = angle - angT
        let angle2 = angle + angT;
        drawLine(x1, y1, x2 , y2, depth, angT);
        drawTree(x2, y2, angle1 , depth -1, angT);
        
        drawTree(x2, y2, angle2 , depth -1,angT);
    }
}



window.addEventListener('load',function () {

let offset = 1;
let anglechange = 0.5
const whiteColor = "#ffffff";
function directionOfTree(){
    offset = offset + anglechange;
}

  this.setInterval(()=>{
    

    if(offset == 35){
        anglechange = -0.5;
    }

    if(offset == 1){
        anglechange = 0.5;
    }
    
    directionOfTree();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle= whiteColor;
    ctx.lineWidth = 1.5;
    drawTree(canvas.width / 2 ,canvas.height, -90, depth, offset);
    ctx.closePath();
    ctx.stroke();

  }, 55);

    

})
    
    





