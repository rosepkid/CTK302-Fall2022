let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let ball1, ball2, ball3;
let types = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	imageMode(CENTER);

	ball1 = loadImage("assets/ball1.png");
	ball2 = loadImage("assets/ball2.png");
	ball3 = loadImage("assets/ball3.png");
	types = [ball1, ball2, ball3];

	// Spawn objects
	for (let i = 0; i < 4; i++) {
		cars.push(new Car());
	}

	// initialize the "frog position" vector
	frogPos = createVector(width / 2, height - 80);
}

function draw() {
	switch (state) {
		case 0: // menu
			background(100);
			text("click to start", width / 2, height / 2);
			break;

		case 1:
			game();
			timer++;
			if (timer > 10 * 60) {
				timer = 0;
				state = 3;
			}
			break;

		case 2: // win
			background(100);
			fill("white");
			text("you won!", width / 2, height / 2);
			break;

		case 3: // lose
			background(100);
			fill("white");
			text("you lost!", width / 2, height / 2);
			break;
	}
}

function resetTheGame() {
	cars = [];

	for (let i = 0; i < 4; i++) {
		cars.push(new Car());
	}
	timer = 0;
}

function mouseReleased() {
	switch (state) {
		case 0: // menu screen
			state = 1;
			break;

		case 2: // win screen
			resetTheGame();
			state = 0;
			break;

		case 3: // lose screen
			resetTheGame();
			state = 0;
			break;
	}
}

function game() {
	background("white");

	// operate on every car
	for (let i = 0; i < cars.length; i++) {
		cars[i].display();
		cars[i].move();

		if (cars[i].pos.dist(frogPos) < 30) {
			cars.splice(i, 1);
		}
	}

	if (cars.length == 0) {
		state = 2;
	}

	// add a "frog"
	fill("green");
	ellipse(frogPos.x, frogPos.y, 50, 50);
	checkForKeys();
}

function checkForKeys() {
	if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
	if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
	if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
	if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

	if (frogPos.x > width) frogPos.x = width;
}

class Car {
	// constructor and attributes
	constructor() {
		this.pos = createVector(random(200, 400), 100); // initialize your attributes here
		this.velocity = createVector(0, random(1, 5));
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
		this.o = random(100);
		this.size = random(48, 128);
		this.type = int(random(types.length) - 1);
		if (random(2) > 1) {
			this.img = ball1;
		} else {
			this.img = ball2;
		}
	}
	// methods

	display() {
		// this can be text, images, or shapes
		//fill(this.r, this.g, this.b, this.o);
		//rect(this.pos.x, this.pos.y, this.size, 25);
		//	image(types[this.type], this.pos.x, this.pos.y, this.size, this.size);
		image(this.img, this.pos.x, this.pos.y, this.size, this.size);
	}

	move() {
		this.pos.add(this.velocity);

		if (this.pos.x > width) this.pos.x = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y > height) this.pos.y = 0;
		if (this.pos.y < 0) this.pos.y = height;
	}
}
