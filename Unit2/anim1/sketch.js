let x = 0;
let f1;

function setup() {
	createCanvas(500, 500);
	f1 = loadFont("assets/mugs.ttf");
}

function draw() {
	background(100);
	textSize(128);
	textFont(f1);
	text("Unit 2 RULES!", x, 200);
	x += 5;

	if (x > width) {
		x = -1000;
	}
}
