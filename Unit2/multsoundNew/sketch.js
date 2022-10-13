let song1, song2, song3;
let state = -1;

function preload() {
	song1 = loadSound("assets/donkey.mp3");
	song2 = loadSound("assets/skate.mp3");
	song3 = loadSound("assets/thrill.mp3");
}

function setup() {
	createCanvas(500, 500);
}

function draw() {
	switch (state) {
		case -1:
			background("black");
			fill("white");
			text("Please click to begin the program", width / 2, height / 2);
			break;

		case 0: // spawn song 1
			background("red");
			if (!song1.isPlaying()) {
				song1.play();
			}
			break;

		case 1: // spawn song 2
			if (!song2.isPlaying()) {
				song2.play();
			}
			background("green");
			break;

		case 2:
			if (!song3.isPlaying()) {
				song3.play();
			}
			background("yellow");
			break;
	}
}

function mouseReleased() {
	song1.pause();
	song2.pause();
	song3.pause();

	state++;
	if (state > 2) {
		state = 0;
	}
}
