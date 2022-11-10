var num;
var distance;
var font1, font2;

var locationData;

function preload() {
	locationData = getCurrentPosition();
}

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(displayWidth, displayHeight);
	num = 0;
	textSize(36);
	intervalCurrentPosition(positionPing, 5000); // this is what calls positionPing function
}

function draw() {}

function positionPing(position) {
	// textSize(36);
	num++;

	distance = calcGeoDistance(
		locationData.latitude,
		locationData.longitude,
		position.latitude,
		position.longitude,
		"mi"
	);

	background("#2452d1");
	fill("white");
	text("lat: " + position.latitude, 10, 40);
	text("long: " + position.longitude, 10, 90);
	text("number of updates " + num, 10, 140);

	text("you have moved " + distance, 10, 190);
	fill("red");
}
