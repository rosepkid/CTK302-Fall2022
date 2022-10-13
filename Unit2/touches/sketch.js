let numberOfTouches;

function setup() {
	createCanvas(400, 400);
	imageMode(CENTER);
}

function draw() {
	clear();
	numberOfTouches = touches.length;
	text(numberOfTouches + " touches", 5, 10);

	switch (numberOfTouches) {
		case 0:
			text("no one is touching the screen", 5, 22);
			break;

		case 1:
			// put a picture here
			image("assets/shark1", width / 2, height / 2);
			text("here is a shark", 5, 22);
			break;

		case 2:
			text("two fingers are touching the screen", 5, 22);
			// put a picture here
			break;

		case 3:
			text("three are touching the screen", 5, 22);
			// put a picture here
			break;
	}
}
