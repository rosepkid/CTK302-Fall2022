var back;
var over;
var title;
var win;
var cars = [];
var frogPos;
var state = 0;
var maxCars = 10;
var maxTimer = 22 * 60;
var timer = maxTimer;
let song;
let eleven;
let dd;
function preload() {
	song = loadSound("assets/metallica.mp3");
}
function setup() {
	// put setup code here
	createCanvas(800, 600);

	//spawn cars
	for (var i = 0; i < maxCars; i++) {
		cars.push(new Car());
	} //end loop
	frogPos = createVector(400, height - 100);

	textAlign(CENTER);
	rectMode(CENTER);
	ellipseMode(CENTER);
	imageMode(CENTER);

	back = loadImage("assets/cover.webp");
	over = loadImage("assets/GO.jpeg");
	title = loadImage("assets/st3.jpeg");
	win = loadImage("assets/win.webp");
	eleven = loadImage("assets/11.png");
	dd = loadImage("assets/demodog.png");
} //end setup

//--------------------------------------

function draw() {
	// put drawing code here

	switch (state) {
		case 0: //menu
			image(title, 400, 300);

			textSize(50);
			fill("red");
			text("DEMODOGS HUNT", width / 2, height / 2 - 50);
			textSize(24);
			text(
				"hunt and kill the demodogs before the demogorgon gets you!",
				width / 2,
				height / 2
			);
			textSize(20);
			text("click to start!", width / 2, height / 2 - 30);
			break;

		case 1: //game state
			game();

			timer = timer - 1;
			if (timer <= 0) {
				timer = maxTimer;
				state = 3; //they lost
			}
			fill("white");
			textSize(48);
			text(cars.length, 100, 100);
			break;

		case 2: //win state
			background("black");
			image(win, 400, 500);
			textSize(50);
			text("You Won!", width / 2, height / 2 - 150);
			text("Click to Restart", width / 2, height / 2 - 100);
			break;

		case 3: //lose state
			song.stop();
			image(over, 400, 300);
			fill("yellow");
			textSize(25);
			text("Click to Restart", width / 2, height / 2 + 20);
			break;
	}
} //end draw

//-----------------------------------

function mouseReleased() {
	switch (state) {
		case 0:
			state = 1;
			break;

		case 2: //win state
			timer = maxTimer;
			resetGame();
			state = 0;
			break;

		case 3: //lost state
			timer = maxTimer;
			resetGame();
			state = 0;
			break;
	}
} //end of mouse

//-----------------------------------

function resetGame() {
	cars = [];
	for (var i = 0; i < maxCars; i++) {
		cars.push(new Car());
	} //end for
	timer = maxTimer;
} //end of resetGame

//-----------------------------------

function game() {
	if (!song.isPlaying()) {
		song.play();
	}
	background("red");
	image(back, 400, 300);

	for (var i = 0; i < cars.length; i++) {
		cars[i].display();
		cars[i].drive();

		if (cars[i].pos.dist(frogPos) < 50) {
			cars.splice(i, 1);
		} //end if
	} //end for

	//if there are no more cars, go to win state
	if (cars.length == 0) {
		state = 2; //you win
	} //end if

	//frog
	fill("white");
	image(eleven, frogPos.x, frogPos.y, 150, 150);

	checkForKeys();
} //end of game
//----------------------------------------------

function checkForKeys() {
	if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
	if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
	if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
	if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
} //end of KeyIsDown
//----------------------------------------------

function Car() {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(random(-5, 5), random(-5));
	this.r = random(255);
	this.b = random(255);
	this.g = random(255);

	//methods
	this.display = function () {
		image(dd, this.pos.x, this.pos.y, 50, 50);

		//rect(this.pos.x, this.pos.y, 50, 50);
	}; //end display

	//---------------------------------------------
	this.drive = function () {
		this.pos.add(this.vel);
		if (this.pos.x > width) this.pos.x = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y > height) this.pos.y = 0;
		if (this.pos.y < 0) this.pos.y = height;
	}; //end drive
	//----------------------------------------------
} //end of car

function touchStarted() {
	getAudioContext().resume();
}
