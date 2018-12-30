let myCanvas;	

// wait for device init and setup a new canvas 
document.addEventListener('DOMContentLoaded', newCanvas, false);

// setup a new canvas for drawing
function newCanvas() {
	// define and resize canvas
	const content = document.getElementById('content');
    content.style.height = window.innerHeight - 90;    
    const canvasHtml = '<canvas id="canvas" width="'+window.innerWidth+'" height="'+(window.innerHeight-90)+'"></canvas>';
	content.innerHTML = canvasHtml;
    
    // setup canvas
	const canvas = document.getElementById('canvas');
	myCanvas = new DrawingArea(canvas);
	myCanvas.setOffset(0, 44);
}
        
function selectColor(el) {
	for (let palette of document.getElementsByClassName("palette")) {
		palette.style.borderColor = "#777";
        palette.style.borderStyle = "solid";
	}

    // highlight selected color
    el.style.borderColor = "#fff";
    el.style.borderStyle = "dashed";
    
    // start using the color
    myCanvas.selectColor(
    	window.getComputedStyle(el).backgroundColor
    );
}
