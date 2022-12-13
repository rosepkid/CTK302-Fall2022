var bubbles = [];
let url = "";

function setup() {
	let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet

	key = "1HUUtMUlUuT21EWNUxTZIHmIHuHfHO6GPGEOmRUeYhfA"; // this is KEY of the URL from the sheet

	url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

	loadJSON(url, gotData);

	// Regular setup code we usually have
	createCanvas(600, 600);
	textAlign(CENTER);
	ellipseMode(CENTER);
	rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
	console.log(data); // Print the data in the console

	// add each line to an array of bubbles
	for (let i = 0; i < data.length; i++) {
		bubbles.push(
			new Bubble(
				data[i]["How good a coder are you?"],
				data[i]["Favorite series"],
				data[i]["How good a designer are you?"],
				data[i]["Your energy level today"],
				data[i]["Name"]
			)
		); // THESE NEED TO MATCH SPREADSHEET
	}
}

function draw() {
	background("blue");

	// // iterate through the bubbles and display the objects!
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].display();
	}
}

// my Bubble class
class Bubble {
	constructor(coder, series, design, energy, name) {
		// only the order of these parameters matters!
		this.coder = coder;
		this.series = series;
		this.name = name;
		this.design = design;
		this.energy = energy;
		this.pos = createVector(random(width), random(height));
		this.vel = createVector(random(2, 5), 0);
	}

	display() {
		stroke("red");
		noFill();
		ellipse(this.pos.x, this.pos.y + 10, 120, 120);
		fill("white");
		text(
			this.name +
				"\n" +
				this.coder +
				"\n" +
				this.series +
				"\n" +
				this.design +
				"\n" +
				this.energy,
			this.pos.x,
			this.pos.y
		);
	}
}
