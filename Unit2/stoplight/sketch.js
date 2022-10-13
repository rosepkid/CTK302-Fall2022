let state = 0;
let timer = 0;
let x = 0;
let v = 0;

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
}

function draw() {
	background(100);
	fill("yellow");
	rect(width / 2, height / 2, 200, 600);

	switch (state) {
		case 0: // green
			fill("grey");
			ellipse(width / 2, height / 2 - 170, 150, 150);
			ellipse(width / 2, height / 2, 150, 150);
			fill("green");
			ellipse(width / 2, height / 2 + 170, 150, 150);
			v = 10;
			break;

		case 1: // yellow
			fill("grey");
			ellipse(width / 2, height / 2 - 170, 150, 150);
			fill("yellow");
			ellipse(width / 2, height / 2, 150, 150);
			fill("grey");
			ellipse(width / 2, height / 2 + 170, 150, 150);
			v = 5;
			break;

		case 2: // red
			fill("red");

			ellipse(width / 2, height / 2 - 170, 150, 150);
			fill("grey");

			ellipse(width / 2, height / 2, 150, 150);
			ellipse(width / 2, height / 2 + 170, 150, 150);
			v = 0;
			break;
	}

	timer++;
	if (timer > 7 * 60) {
		timer = 0;
		state++;
		if (state > 2) state = 0;
	}

	fill("blue");
	rect(x, height - 75, 100, 50);
	x = x + v;
	if (x > width) {
		x = 0;
	}
}

function mouseReleased() {
	state++;
	if (state > 2) state = 0;
}
