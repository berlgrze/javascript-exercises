//Task description:
//Write a JavaScript program to write triangle

//draw triangle
function draw() {
    const canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(100,50);
      ctx.lineTo(50,150);
      ctx.lineTo(150,150);
      ctx.fill();
    }

//draw triangle on dom loaded
document.onload = draw();