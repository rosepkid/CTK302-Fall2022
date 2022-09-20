/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

function setup() {
	createCanvas(720, 400);
}

function draw() {
	background("pink");
	// noStroke();

	fill(0, 100, 20);
	triangle(18, 18, 18, 360, 81, 360);

	// fill(102);
	rect(81, 300, 63, 63);

	fill(204);
	quad(189, 18, 216, 18, 216, 360, 144, 360);

	fill(255);
	ellipse(252, 144, 72, 72);

	fill(204);
	triangle(288, 18, 351, 360, 288, 360);

	fill(255);
	arc(479, 300, 280, 280, PI, TWO_PI);

	fill("black");
	text(mouseX + ", " + mouseY, 20, 20);
}

function mouseReleased() {
	print(mouseX + ", " + mouseY);
}
