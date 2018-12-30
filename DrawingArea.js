const DEFAULT_LINE_WIDTH = 5;

class DrawingArea {

	constructor(canvas, saveMode=false) {
		this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

		// save drawings by default
		this.setSaveMode(saveMode);

        // context properties
		this.ctx.lineWidth = DEFAULT_LINE_WIDTH;	
    	this.selectColor('#000'); // default color

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

    setSaveMode(saveMode) {
    	this.save = saveMode;

    	if (this.save)
    		this.history = [];
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

			this.drawLineTo(
				e.changedTouches[0].pageX,
				e.changedTouches[0].pageY
			);
		}.bind(this);

		this.canvas.addEventListener('touchstart', start, false);
		this.canvas.addEventListener('touchmove', move, false);
	}    

	// to start drawing on mouse, using canvas moveTo and lineTo
	drawMouse() {
		let pressed = false;

		const start = function(e) {
			pressed = true;
			this.beginPath(e.pageX, e.pageY);
		}.bind(this);

		const move = function(e) {		
			if (pressed)
				this.drawLineTo(e.pageX, e.pageY);

		}.bind(this);

		const stop = (e) => {
			pressed = false;
		};

	    this.canvas.addEventListener('mousedown', start, false);
		this.canvas.addEventListener('mousemove', move, false);

		document.addEventListener('mouseup', stop, false);
	};

	selectColor(color) {
		this.ctx.beginPath();
    	this.ctx.strokeStyle = color;

    	if (this.save)
			this.history.push({
				type: 'color',
				color
			});

		this.color = color;
	}

	beginPath(x, y) {
		this.ctx.beginPath();
		
		if (this.save)
			this.history.push({
				type: 'begin',
				x, 
				y
			});
		
		x -= this.offset.x;
		y -= this.offset.y;
		this.ctx.moveTo(x, y);
	}

	drawLineTo(x, y) {
		console.log(x, y);

		if (this.save)
			this.history.push({
				type: 'draw',
				x, 
				y
			});

		x -= this.offset.x;
		y -= this.offset.y;

		this.ctx.lineTo(x, y);
		this.ctx.stroke();
	}

	drawHistory(actions, saveRedrawn=false) {
		const originalSaveMode = this.save;
		const currentColor = this.color;

		if (originalSaveMode)
			this.save = saveRedrawn;

		actions.forEach(action => {
			if (action.type === 'begin')
				this.beginPath(action.x, action.y);
			else if (action.type === 'draw')
				this.drawLineTo(action.x, action.y);
			else if (action.type === 'color')
				this.selectColor(action.color);
		});

		this.selectColor(currentColor);
		this.save = originalSaveMode;
	}

	drawGuide(actions) {
		const currentColor = this.color;
		const currentLineWidth = this.ctx.lineWidth;

		// guides should use only 1 color and 1 line width
		this.selectColor('#c9d3e2');
		this.ctx.lineWidth = 15;
		this.drawHistory(actions, false);

		// recover original values
		this.ctx.lineWidth = currentLineWidth;
		this.selectColor(currentColor);	
	}
}
