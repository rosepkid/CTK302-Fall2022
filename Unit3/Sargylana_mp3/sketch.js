let player, suorij, collectibles, objective;
let map01, map02, map03, map04, map05, map06, map07, map08, map09;
let wall01;
let map, clothes;
let memory1, memory2, memory3, memory4, memory5;

function preload() {
	//map07 = new Sprite(-400, 300, "none");
	//map07.addImage("assets/map08.png");

	wall = [
		[191, 150, 26, 130],
		[191, 455, 26, 30],
		[-135, 300, 26, 350],
		[607, -310, 45, 900],
		[1318, -100, 45, 1200],
	];

	for (let i = 0; i < wall.length; i++) {
		for (let j = 0; j < 4; j++) {
			wall01 = new Sprite(wall[i][j], "static");
			console.log("wall01 adding " + wall[i][j]);
		}
	}

	// wall01 = new Sprite(191, 150, 26, 130, "static");
	// wall01 = new Sprite(191, 455, 26, 30, "static");
	// wall01 = new Sprite(-135, 300, 26, 350, "static");
	// wall01 = new Sprite(607, -310, 45, 900, "static");
	// wall01 = new Sprite(1318, -100, 45, 1200, "static");
	wall01 = new Sprite(614, 445, 45, 120, "static");
	wall01 = new Sprite(570, -276, 38, 800, "static");
	wall01 = new Sprite(-141, -276, 26, 800, "static");
	wall01 = new Sprite(500, 485, 1600, 35, "static");
	wall01 = new Sprite(500, -700, 1600, 35, "static");
	wall01 = new Sprite(100, 96, 500, 20, "static");
	wall01 = new Sprite(530, 96, 45, 20, "static");
	wall01 = new Sprite(245, 150, 60, 140, "static");
	wall01 = new Sprite(-50, 300, 130, 300, "static");
	wall01 = new Sprite(50, 125, 300, 40, "static");

	wall02 = new Sprite(515, 25, 25, 140, "static");
	wall02.rotation = 12;
	wall01 = new Sprite(95, 15, 390, 140, "static");
	wall01 = new Sprite(95, 15, 390, 140, "static");
	wall01 = new Sprite(-10, -410, 205, 140, "static");
	wall01 = new Sprite(450, -610, 200, 140, "static");
	wall01 = new Sprite(100, -610, 400, 100, "static");
	wall03 = new Sprite(695, 425, 30, 180, "static");
	wall03.rotation = 107;
	wall01 = new Sprite(1170, 303, 220, 400, "static");
	wall01 = new Sprite(1260, -500, 220, 200, "static");
	wall01 = new Sprite(1000, -650, 420, 200, "static");
	wall01 = new Sprite(700, -400, 190, 500, "static");
	//map = new Sprite(400, 300, 2400, 3000, "none");
	//map.addImage("assets/map.png");

	player = new Sprite(400, 300, 65, 200);
	player.addAnimation("walk", "assets/playerwalk.png", {
		size: [211, 211],
		frames: 12,
	});
	player.addAnimation("up", "assets/playerup.png", {
		size: [211, 211],
		frames: 12,
	});
	player.addAnimation("down", "assets/playerdown.png", {
		size: [211, 211],
		frames: 12,
	});
	player.rotationLock = true;
	clothes = new Sprite(400, 300, 2400, 3000, "none");
	clothes.addImage("assets/clothes.png");
}

function setup() {
	createCanvas(800, 600);

	//collectibles = new Group();
	//collectibles.diameter = 10;
	//collectibles.x = () => random(121, 500);
	//collectibles.y = () => random(5, 10);
	//collectibles.amount = 2;
	//collectibles.collider = "static";

	//player.overlaps(collectibles, packingmemories);
}

function draw() {
	background("grey");
	movement();
	camera.on();
	player.debug = mouse.holding();
}

function movement() {
	if (kb.pressing("w")) {
		player.ani = "up";
		player.vel.y = -3;
	} else if (kb.pressing("s")) {
		player.ani = "down";
		player.vel.y = 3;
	} else {
		player.vel.y = 0;
	}
	if (kb.pressing("d")) {
		player.ani = "walk";
		player.mirror.x = false;
		player.vel.x = 3;
	} else if (kb.pressing("a")) {
		player.ani = "walk";
		player.mirror.x = true;
		player.vel.x = -3;
	} else {
		player.vel.x = 0;
	}
	if (
		kb.pressing("w") ||
		kb.pressing("s") ||
		kb.pressing("a") ||
		kb.pressing("d")
	) {
		player.ani.playing = true;
	} else {
		player.ani.playing = false;
	}

	camera.x = player.x;
	camera.y = player.y;
}

function packingmemories(player, collectible) {
	collectible.remove();
}
