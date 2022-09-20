let x = 0;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(100);
	push();

	translate(x, 0);
	avatar();
	x += 1;
	if (x > width) {
		x = 0;
	}
	pop();
}

function avatar() {
	// This is the hands
	fill("black");

	rect(width / 2 - 45, height / 2 - 45, 25, 140);
	rect(width / 2 + 60, height / 2 - 45, 25, 140);
	fill(168, 96, 50);
	ellipse(width / 2 + 20, height / 2 - 110, 120);
	fill("yellow");
	ellipse(width / 2 - 45, height / 2 - 80, 40);
	ellipse(width / 2 - 35, height / 2 - 50, 40);
	ellipse(width / 2 - 45, height / 2 - 110, 40);
	ellipse(width / 2 - 30, height / 2 - 140, 40);
	ellipse(width / 2 - 10, height / 2 - 169, 40);
	ellipse(width / 2 + 25, height / 2 - 180, 40);
	ellipse(width / 2 + 57, height / 2 - 175, 40);
	ellipse(width / 2 + 80, height / 2 - 145, 40);
	ellipse(width / 2 + 90, height / 2 - 110, 40);
	ellipse(width / 2 + 95, height / 2 - 85, 40);
	ellipse(width / 2 + 90, height / 2 - 65, 40);
	fill("blue");
	ellipse(width / 2 + 5, height / 2 - 130, 10);
	ellipse(width / 2 + 45, height / 2 - 130, 10);

	fill("black");
	rect(width / 2 - 5, height / 2 + 130, 25, 240);
	rect(width / 2 + 50, height / 2 + 130, 25, 240);
	fill(168, 96, 50);
	ellipse(width / 2 + 35, height / 2 + 80, 150);
}
