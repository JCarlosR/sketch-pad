let ctx, color = "#000";	

document.addEventListener('DOMContentLoaded', function() {
	// setup a new canvas (wait for device init)
    setTimeout(function(){
	   newCanvas();
    }, 1000);
}, false);

// setup a new canvas for drawing
function newCanvas() {
	// define and resize canvas
	const content = document.getElementById("content");
    content.style.height = window.innerHeight - 90;
    const canvas = '<canvas id="canvas" width="'+window.innerWidth+'" height="'+(window.innerHeight-90)+'"></canvas>';
	content.innerHTML = canvas;
    
    // setup canvas
	ctx = document.getElementById('canvas').getContext('2d');
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;	
	
	// setup events
    drawTouch();
	drawMouse();
}
        
function selectColor(el) {
    for (var i=0; i<document.getElementsByClassName("palette").length; i++){
        document.getElementsByClassName("palette")[i].style.borderColor = "#777";
        document.getElementsByClassName("palette")[i].style.borderStyle = "solid";
    }

    // highlight selected color
    el.style.borderColor = "#fff";
    el.style.borderStyle = "dashed";
    
    // start using the color
    color = window.getComputedStyle(el).backgroundColor;
    ctx.beginPath();
    ctx.strokeStyle = color;
}

// prototype to	start drawing on touch using canvas moveTo and lineTo
const drawTouch = function() {
	const start = function(e) {
		ctx.beginPath();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-44;
		ctx.moveTo(x,y);
	};
	const move = function(e) {
		e.preventDefault();
		x = e.changedTouches[0].pageX;
		y = e.changedTouches[0].pageY-44;
		ctx.lineTo(x,y);
		ctx.stroke();
	};

	const canvas = document.getElementById('canvas');
    canvas.addEventListener('touchstart', start, false);
	canvas.addEventListener('touchmove', move, false);
}; 
          
// prototype to	start drawing on mouse using canvas moveTo and lineTo
const drawMouse = function() {
	let clicked = 0;

	const start = function(e) {
		clicked = 1;
		ctx.beginPath();
		x = e.pageX;
		y = e.pageY-44;
		ctx.moveTo(x,y);
	};
	const move = function(e) {
		console.log(e.pageX, e.pageY);
		
		if (clicked) {
			x = e.pageX;
			y = e.pageY-44;
			ctx.lineTo(x,y);
			ctx.stroke();
		}
	};
	const stop = function(e) {
		clicked = 0;
	};

	const canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', start, false);
	canvas.addEventListener('mousemove', move, false);

	document.addEventListener('mouseup', stop, false);
};