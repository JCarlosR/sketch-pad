let myCanvas;	
const PRECISION_TOLERANCE = 10;
const COVERAGE_TOLERANCE = 8;

const guideHistory = [{"type":"begin","x":168,"y":487},{"type":"draw","x":169,"y":487},{"type":"draw","x":170,"y":487},{"type":"draw","x":173,"y":484},{"type":"draw","x":176,"y":482},{"type":"draw","x":179,"y":479},{"type":"draw","x":183,"y":474},{"type":"draw","x":187,"y":469},{"type":"draw","x":192,"y":463},{"type":"draw","x":196,"y":457},{"type":"draw","x":200,"y":451},{"type":"draw","x":203,"y":446},{"type":"draw","x":206,"y":441},{"type":"draw","x":209,"y":435},{"type":"draw","x":213,"y":428},{"type":"draw","x":215,"y":424},{"type":"draw","x":217,"y":419},{"type":"draw","x":219,"y":416},{"type":"draw","x":220,"y":411},{"type":"draw","x":223,"y":406},{"type":"draw","x":225,"y":401},{"type":"draw","x":228,"y":396},{"type":"draw","x":229,"y":391},{"type":"draw","x":231,"y":386},{"type":"draw","x":233,"y":382},{"type":"draw","x":236,"y":374},{"type":"draw","x":239,"y":370},{"type":"draw","x":242,"y":364},{"type":"draw","x":244,"y":359},{"type":"draw","x":248,"y":353},{"type":"draw","x":251,"y":348},{"type":"draw","x":254,"y":344},{"type":"draw","x":257,"y":338},{"type":"draw","x":262,"y":332},{"type":"draw","x":266,"y":328},{"type":"draw","x":270,"y":324},{"type":"draw","x":274,"y":318},{"type":"draw","x":278,"y":314},{"type":"draw","x":285,"y":308},{"type":"draw","x":290,"y":305},{"type":"draw","x":296,"y":301},{"type":"draw","x":300,"y":298},{"type":"draw","x":305,"y":296},{"type":"draw","x":311,"y":293},{"type":"draw","x":320,"y":290},{"type":"draw","x":330,"y":289},{"type":"draw","x":340,"y":286},{"type":"draw","x":350,"y":284},{"type":"draw","x":357,"y":283},{"type":"draw","x":369,"y":283},{"type":"draw","x":375,"y":283},{"type":"draw","x":381,"y":283},{"type":"draw","x":387,"y":283},{"type":"draw","x":393,"y":284},{"type":"draw","x":397,"y":284},{"type":"draw","x":399,"y":285},{"type":"draw","x":400,"y":285},{"type":"draw","x":400,"y":286},{"type":"draw","x":399,"y":286},{"type":"draw","x":398,"y":287},{"type":"begin","x":224,"y":406},{"type":"draw","x":224,"y":407},{"type":"draw","x":224,"y":408},{"type":"draw","x":224,"y":409},{"type":"draw","x":224,"y":410},{"type":"draw","x":224,"y":413},{"type":"draw","x":224,"y":414},{"type":"draw","x":224,"y":416},{"type":"draw","x":224,"y":417},{"type":"draw","x":225,"y":419},{"type":"draw","x":226,"y":421},{"type":"draw","x":227,"y":424},{"type":"draw","x":228,"y":426},{"type":"draw","x":229,"y":427},{"type":"draw","x":230,"y":429},{"type":"draw","x":231,"y":430},{"type":"draw","x":233,"y":433},{"type":"draw","x":235,"y":436},{"type":"draw","x":239,"y":442},{"type":"draw","x":244,"y":448},{"type":"draw","x":247,"y":452},{"type":"draw","x":250,"y":455},{"type":"draw","x":252,"y":457},{"type":"draw","x":254,"y":459},{"type":"draw","x":257,"y":460},{"type":"draw","x":260,"y":462},{"type":"draw","x":264,"y":463},{"type":"draw","x":268,"y":464},{"type":"draw","x":272,"y":465},{"type":"draw","x":276,"y":466},{"type":"draw","x":281,"y":467},{"type":"draw","x":286,"y":469},{"type":"draw","x":291,"y":471},{"type":"draw","x":296,"y":471},{"type":"draw","x":302,"y":472},{"type":"draw","x":308,"y":473},{"type":"draw","x":314,"y":474},{"type":"draw","x":317,"y":474},{"type":"draw","x":322,"y":474},{"type":"draw","x":329,"y":474},{"type":"draw","x":340,"y":474},{"type":"draw","x":346,"y":474},{"type":"draw","x":353,"y":474},{"type":"draw","x":359,"y":474},{"type":"draw","x":365,"y":474},{"type":"draw","x":370,"y":474},{"type":"draw","x":377,"y":473},{"type":"draw","x":385,"y":473},{"type":"draw","x":391,"y":473},{"type":"draw","x":396,"y":473},{"type":"draw","x":402,"y":473},{"type":"draw","x":407,"y":473},{"type":"draw","x":412,"y":472},{"type":"draw","x":416,"y":470},{"type":"draw","x":420,"y":470},{"type":"draw","x":425,"y":468},{"type":"draw","x":428,"y":468},{"type":"draw","x":431,"y":467},{"type":"draw","x":433,"y":467},{"type":"draw","x":436,"y":465},{"type":"draw","x":439,"y":464},{"type":"draw","x":441,"y":463},{"type":"draw","x":442,"y":462},{"type":"draw","x":443,"y":461},{"type":"draw","x":443,"y":460},{"type":"draw","x":443,"y":459},{"type":"draw","x":444,"y":455},{"type":"begin","x":400,"y":286},{"type":"draw","x":400,"y":285},{"type":"draw","x":401,"y":285},{"type":"draw","x":401,"y":286},{"type":"draw","x":402,"y":286},{"type":"draw","x":402,"y":289},{"type":"draw","x":402,"y":291},{"type":"draw","x":404,"y":296},{"type":"draw","x":405,"y":299},{"type":"draw","x":407,"y":304},{"type":"draw","x":408,"y":308},{"type":"draw","x":410,"y":313},{"type":"draw","x":410,"y":318},{"type":"draw","x":411,"y":324},{"type":"draw","x":413,"y":331},{"type":"draw","x":415,"y":337},{"type":"draw","x":416,"y":342},{"type":"draw","x":417,"y":347},{"type":"draw","x":418,"y":350},{"type":"draw","x":419,"y":354},{"type":"draw","x":419,"y":357},{"type":"draw","x":419,"y":362},{"type":"draw","x":421,"y":365},{"type":"draw","x":421,"y":369},{"type":"draw","x":422,"y":374},{"type":"draw","x":422,"y":377},{"type":"draw","x":423,"y":381},{"type":"draw","x":424,"y":384},{"type":"draw","x":425,"y":389},{"type":"draw","x":426,"y":392},{"type":"draw","x":426,"y":396},{"type":"draw","x":426,"y":399},{"type":"draw","x":427,"y":401},{"type":"draw","x":428,"y":404},{"type":"draw","x":428,"y":406},{"type":"draw","x":428,"y":407},{"type":"draw","x":429,"y":409},{"type":"draw","x":429,"y":412},{"type":"draw","x":430,"y":415},{"type":"draw","x":430,"y":417},{"type":"draw","x":430,"y":419},{"type":"draw","x":430,"y":423},{"type":"draw","x":431,"y":428},{"type":"draw","x":432,"y":430},{"type":"draw","x":432,"y":433},{"type":"draw","x":432,"y":435},{"type":"draw","x":432,"y":437},{"type":"draw","x":432,"y":439},{"type":"draw","x":432,"y":440},{"type":"draw","x":432,"y":441},{"type":"draw","x":432,"y":443},{"type":"draw","x":433,"y":446},{"type":"draw","x":433,"y":448},{"type":"draw","x":434,"y":450},{"type":"draw","x":434,"y":451},{"type":"draw","x":435,"y":452},{"type":"draw","x":435,"y":453},{"type":"draw","x":435,"y":454},{"type":"draw","x":435,"y":456},{"type":"draw","x":436,"y":456},{"type":"draw","x":436,"y":458},{"type":"draw","x":437,"y":459},{"type":"draw","x":437,"y":460},{"type":"draw","x":439,"y":462},{"type":"draw","x":440,"y":462},{"type":"draw","x":440,"y":464},{"type":"draw","x":440,"y":465},{"type":"draw","x":441,"y":465},{"type":"draw","x":441,"y":466},{"type":"draw","x":441,"y":467},{"type":"draw","x":443,"y":468},{"type":"draw","x":443,"y":469},{"type":"draw","x":444,"y":469},{"type":"draw","x":445,"y":470},{"type":"draw","x":447,"y":472},{"type":"draw","x":449,"y":473},{"type":"draw","x":450,"y":473},{"type":"draw","x":450,"y":474},{"type":"draw","x":452,"y":475},{"type":"draw","x":455,"y":476},{"type":"draw","x":457,"y":478},{"type":"draw","x":459,"y":479},{"type":"draw","x":460,"y":480},{"type":"draw","x":462,"y":480},{"type":"draw","x":464,"y":481},{"type":"draw","x":467,"y":482},{"type":"draw","x":469,"y":483},{"type":"draw","x":470,"y":483},{"type":"draw","x":471,"y":483},{"type":"draw","x":473,"y":483},{"type":"draw","x":474,"y":484},{"type":"draw","x":477,"y":485},{"type":"draw","x":481,"y":486},{"type":"draw","x":482,"y":486},{"type":"draw","x":483,"y":486},{"type":"draw","x":485,"y":485},{"type":"draw","x":491,"y":481}];

// wait for device init and setup a new canvas 
document.addEventListener('DOMContentLoaded', newCanvas, false);

function newCanvas() {
	// define canvas size
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight - 44;

    // init canvas element
	const content = document.getElementById('content');
    content.style.height = canvasHeight;
    const canvasHtml = `<canvas id="canvas" width="${canvasWidth}" height="${canvasHeight}"></canvas>`;
	content.innerHTML = canvasHtml;
    
    // setup canvas
	const canvas = document.getElementById('canvas');
	myCanvas = new DrawingArea(canvas, true);
	myCanvas.setOffset(0, 44);
}
        
// 2 evaluations: precision and coverage
function compareDrawings() {
    const guidePoints = actionsToPoints(guideHistory);
    const drawnPoints = actionsToPoints(myCanvas.history);

    if (drawnPoints.length === 0) {
        alert('Nothing to compare');
        return;
    }
        
    // precision: right vs wrong (useless) lines
    let rightPoints = 0;
    drawnPoints.forEach(drawnPoint => {
        const isRightPoint = guidePoints.some(point => distanceBetween(drawnPoint, point) < PRECISION_TOLERANCE);
        
        if (isRightPoint)
            rightPoints += 1;
    });
    const precision = rightPoints / drawnPoints.length * 100;
    console.log('Right and total drawn points', rightPoints, drawnPoints.length);
    alert('Precision: ' + precision);


    // coverage: how much the guide was fulfilled
    let fulfilledPoints = 0;
    guidePoints.forEach(guidePoint => {
        const isFulfilledPoint = drawnPoints.some(point => distanceBetween(guidePoint, point) < COVERAGE_TOLERANCE);
        
        if (isFulfilledPoint)
            fulfilledPoints += 1;
    });
    const coverage = fulfilledPoints / guidePoints.length * 100;
    console.log('Fulfilled and total guide points', fulfilledPoints, guidePoints.length);
    alert('Coverage: ' + coverage);
}

function drawGuide() {
    myCanvas.drawGuide(guideHistory);
}

function actionsToPoints(actions) {
    return actions
        .filter(action => action.type === 'draw')
        .map(action => {
            const {type, ...point} = action;
            return point;
        });
}

function distanceBetween(p1, p2) {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;

    return Math.sqrt(x*x + y*y);
}