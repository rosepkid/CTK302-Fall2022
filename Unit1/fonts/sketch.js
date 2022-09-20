let f1, f2, f3;

function setup() {
	createCanvas(500, 500);
	f1 = loadFont("assets/mugs.ttf");
	f2 = loadFont("assets/NEONLEDLight.otf");
	f3 = loadFont("assets/Waya.ttf");
	textAlign(CENTER);
}

function draw() {
	background("black");
	fill("white");
	textFont(f1, 48);
	text("hello there!", width / 2, 100);
	textFont(f2, 24);
	text("I am Obi Wan", width / 2, 200);
	textFont(f3, 24);
	text("Kenobi", width / 2, 300);
}
