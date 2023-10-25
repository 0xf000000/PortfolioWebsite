
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
let num = 1

function test(){
    offset = offset + num;
}

  this.setInterval(()=>{
    

    if(offset == 35){
        num = -1;
    }

    if(offset == 1){
        num = 1;
    }




    
    test();
    

    console.log(offset);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle="#ffffff";
    drawTree(canvas.width / 2 ,canvas.height, -90, depth, offset);
    ctx.closePath();
    ctx.stroke();

    

  }, 55);

    

})
    
    





