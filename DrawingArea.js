class DrawingArea {

	constructor(canvas) {
		this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.color = "#000";

        // context properties
    	this.ctx.strokeStyle = this.color;
		this.ctx.lineWidth = 5;	

        // setup events
        this.drawTouch();
		this.drawMouse();
    }

    setOffset(left, top) {
    	this.offset = {
    		x: left,
    		y: top
    	};
    }


	// to start drawing on touch, using canvas moveTo and lineTo    
    drawTouch() {
		const start = function(e) {
			this.beginPath(
				e.changedTouches[0].pageX, 
				e.changedTouches[0].pageY
			);
		}.bind(this);

		const move = function(e) {
			e.preventDefault();

			this.drawLine(
				e.changedTouches[0].pageX,
				e.changedTouches[0].pageY
			);
		}.bind(this);

		this.canvas.addEventListener('touchstart', start, false);
		this.canvas.addEventListener('touchmove', move, false);
	}    

	// to start drawing on mouse, using canvas moveTo and lineTo
	drawMouse() {
		let clicked = 0;

		const start = function(e) {
			clicked = 1;
			this.beginPath(e.pageX, e.pageY);
		}.bind(this);

		const move = function(e) {		
			if (clicked) {
				this.drawLine(e.pageX, e.pageY);
			}
		}.bind(this);

		const stop = function(e) {
			clicked = 0;
		};

	    this.canvas.addEventListener('mousedown', start, false);
		this.canvas.addEventListener('mousemove', move, false);

		document.addEventListener('mouseup', stop, false);
	};

	selectColor(color) {
		this.ctx.beginPath();
    	this.ctx.strokeStyle = color;
	}

	beginPath(x, y) {
		this.ctx.beginPath();
		
		x -= this.offset.x;
		y -= this.offset.y;
		this.ctx.moveTo(x, y);
	}

	drawLine(x, y) {
		console.log(x, y);

		x -= this.offset.x;
		y -= this.offset.y;

		this.ctx.lineTo(x, y);
		this.ctx.stroke();
	}
}
