let summer;

function preload() {
	summer = loadSound("assets/summer.mp3");
}

function setup() {
	createCanvas(500, 500);
	// textAlign(CENTER);
	summer.play();
}

function draw() {
	background("black");
	fill("white");
	text(
		"I'm baby swag fam photo booth, sustainable PBR&B adaptogen etsy YOLO yes plz lomo whatever jean shorts DSA. Tousled hoodie kitsch yes plz post-ironic meggings waistcoat. Small batch cornhole artisan slow-carb fingerstache everyday carry. Artisan lo-fi food truck, kickstarter hella ethical meggings mixtape gluten-free. Next level beard kombucha kale chips chia, kitsch quinoa tumeric tote bag.\
		\n\nBicycle rights hashtag kale chips adaptogen dreamcatcher VHS. Intelligentsia beard slow-carb mustache organic. Tilde air plant copper mug aesthetic trust fund four dollar toast shaman cardigan. Viral truffaut snackwave, deep v meh narwhal small batch distillery mixtape. Skateboard semiotics Brooklyn pork belly, before they sold out godard gastropub raclette jianbing shaman offal. You probably haven't heard of them direct trade distillery live-edge YOLO. Aesthetic occupy lyft small batch affogato narwhal.",
		20,
		10,
		490,
		490
	);
}

function mouseReleased() {
	if (summer.isPlaying()) {
		summer.pause();
	} else {
		summer.play();
	}
}

function touchStarted() {
	getAudioContext().resume();
}
