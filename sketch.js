// variables for main character
let main;
let mainFaceLeft;
let mainFaceRight;
let mainX;
let mainY;
let pmainX;
let mainSize;
let bottomLimit;
let mainChracterSpeed;

let size;

// variables for game
let backdrop;
let gameMusic;
let heartImage;
let lives; 
let recyclableObjectsCollected;
let numberOfRecyclableObjectsToWin ;

// variables for sounds
let scoreSound;
let randomOuchNum;
let pOuchNum;
let ouchSound1;
let ouchSound2;
let ouchSound3;
let clickSound;
let soundsArray = [];

// variables for start screen
let startScreenBoolean;
let startScreenBackdrop;
let bar1;
let bar2;
let bar3;
let level;

// variables for win
let winScreen2;
let winScreen3;
let winScreen4;
let winScreen5;
let winScreen6;
let winScreen7;
let winScreenArray;
let winScreenIndex;
let winMusic;
let bounceCounter;
let winGameBoolean;
let mainSizeDirection;

// variables for lose
let loseGameBoolean;
let loseScreen;
let loseMusic;
let furretMusic;
let lose1;
let lose2;
let lose3;
let lose4;
let loseRain;
let tearDrop;

// variables for interface
let theCanvas;
let canvasX;
let canvasY;
let rangeData;
let finalRangeData;

// images 
let charWater = [];
let charWaterCounter = 0;
let charWaterMod = 0;
let tearArray = [];
let tearRate = 160;
let tearCounter = 90;
let tearY = 275;

let parallaxImage1, parallaxImage2;
let parallax1X = 0, parallax2X = 1280;
let parallaxSpeed = 4;

let furretImageArray = [];
let furret;
let furretStartX = 185, furretStartY = 435;
let furretImageDelayCounter = 0;
let sadFurretImage;
let happyFurretImageArray = [];
let happyFurretCounter = 0;
let loseMessageCounter = 0;
let happyFurretCooldown = 0;
let loseMessageCooldown = 0;
let dancingFurretImage;
let recyclingBinImage;
let furretHeadImage;
let furretBinCounter = 0;
let furretTinCounter = 0;
let furretR, furretG, furretB;
let winMessageArray = [];
let loseMessageArray = [];
let winMessageCoolDown = 0;
let jumpCounter = 0;

let objectArray = [];
let badObjectImageArray = [], goodObjectImageArray = [];
let objectCoolDown;
let objectCoolDownLower, objectCoolDownUpper;

// our recording object
let myRec;

let collisionLines = false;

let menuBarArray = [];

function preload() {
	heartImage = loadImage("images/heart.png");

	bar1 = loadImage("images/bar1.png");
	bar2 = loadImage("images/bar2.png");
	bar3 = loadImage("images/bar3.png");
	
	clickSound = loadSound("sounds/click.mp3"); // soundsArray.push(clickSound);
	scoreSound = loadSound("sounds/score.mp3"); soundsArray.push(scoreSound); 
	ouchSound1 = loadSound("sounds/ouch1.mp3"); soundsArray.push(ouchSound1);
	ouchSound2 = loadSound("sounds/ouch2.mp3"); soundsArray.push(ouchSound2);
	ouchSound3 = loadSound("sounds/ouch3.mp3"); soundsArray.push(ouchSound3);
	furretMusic = loadSound("sounds/furretMusic.mp3"); soundsArray.push(furretMusic);

	loseMusic = loadSound("sounds/loseMusic.mp3"); soundsArray.push(loseMusic);
	tearDrop = loadImage("images/tear.png");
	sadFurretImage = loadImage("images/sad_furret.jpeg");

	winMusic = loadSound("sounds/winMusic.mp3"); soundsArray.push(winMusic);

	for (let i = 1; i <= 4; i++) {
		charWater.push(loadImage("images/charWater/char" + i + ".png"));
	}

	for (let i = 1; i <= 16; i++) {
		furretImageArray.push(loadImage("images/furret/" + i + ".png"));
	}

	// for (let i = 1; i <= 90; i++) {
	// 	happyFurretImageArray.push(loadImage("images/happy_furret/" + i + ".png"));
	// }

	for (let i = 0; i <= 50; i++) {
		winMessageArray.push(loadImage("images/win_message/" + i + ".png"));
	}

	for (let i = 0; i <= 38; i++) {
		loseMessageArray.push(loadImage("images/lose_message/" + i + ".png"));
	}

	dancingFurretImage = loadImage("images/furret_dancing.png");
	recyclingBinImage = loadImage("images/recycling_bin.png");
	furretHeadImage = loadImage("images/furret_head.png");

	parallaxImage1 = loadImage("images/parallax1.jpeg");
	parallaxImage2 = loadImage("images/parallax2.jpeg");

	let objectWidth;
	let heightWidthRatio;

	objectWidth = 90;
	heightWidthRatio = 1.12727272727;
	badObjectImageArray.push([loadImage("images/bad_objects/apple.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.3, objectWidth * 0.3, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 90;
	heightWidthRatio = 1.29103608847;
	badObjectImageArray.push([loadImage("images/bad_objects/banana.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.6, objectWidth * 0.3, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 100;
	heightWidthRatio = 1.45065789474;
	badObjectImageArray.push([loadImage("images/bad_objects/plastic_bag.png"), 430, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.1, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.5, objectWidth * heightWidthRatio * 0]);

	objectWidth = 120;
	heightWidthRatio = 1.09186746988;
	badObjectImageArray.push([loadImage("images/bad_objects/styrofoam.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.1, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.1, objectWidth * heightWidthRatio * 0.1]);

	objectWidth = 120;
	heightWidthRatio = 1;
	badObjectImageArray.push([loadImage("images/bad_objects/styrofoam_cup.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.4, objectWidth * 0.4, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 50;
	heightWidthRatio = 2.07906976744;
	badObjectImageArray.push([loadImage("images/bad_objects/battery.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0, objectWidth * 0, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 120;
	heightWidthRatio = 1;
	goodObjectImageArray.push([loadImage("images/good_objects/newspaper.png"), 460, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.1, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.2, objectWidth * heightWidthRatio * 0.4]);
	
	objectWidth = 55;
	heightWidthRatio = 1.80909090909;
	goodObjectImageArray.push([loadImage("images/good_objects/soda_can.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0, objectWidth * 0, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 110;
	heightWidthRatio = 1.35;
	goodObjectImageArray.push([loadImage("images/good_objects/beer_bottle.png"), 430, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.6, objectWidth * 0.6, objectWidth * heightWidthRatio * 0, objectWidth * heightWidthRatio * 0]);

	objectWidth = 120;
	heightWidthRatio = 1.0752688172;
	goodObjectImageArray.push([loadImage("images/good_objects/pizza_box.png"), 450, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.3, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.1, objectWidth * heightWidthRatio * 0.3]);

	objectWidth = 50;
	heightWidthRatio = 2.8978978979;
	goodObjectImageArray.push([loadImage("images/good_objects/plastic_bottle.png"), 430, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.2, objectWidth * heightWidthRatio * 0]);

	objectWidth = 70;
	heightWidthRatio = 2.27338129496
	goodObjectImageArray.push([loadImage("images/good_objects/milk_carton.png"), 430, objectWidth, objectWidth * heightWidthRatio, objectWidth * 0.05, objectWidth * 0.1, objectWidth * heightWidthRatio * 0.15, objectWidth * heightWidthRatio * 0.1]);
}

function setup() {
	theCanvas = createCanvas(1280, 595);
	//repositionCanvas();

	// create speech to text object
	myRec = new p5.SpeechRec();

	// set up our recorder to constantly monitor the incoming audio stream
	myRec.continuous = true; // do continuous recognition

	// allow partial results - this will detect words as they are said and will
	// call the parse function as soon as a word is decoded
	// when a pause in conversation occurs the entire string will be sent
	// to the parse function
	myRec.interimResults = true;

	// define our parse function (called every time a word/phrase is detected)
	myRec.onResult = parseResult;

	// start the recording engine
	myRec.start();

	furret = new MainCharacter(furretImageArray, furretStartX, furretStartY);

	menuBarArray.push(new MenuBar("Easy", 400, 90, 480, 100, 254, 246, 137, bar1, 440, 100, 180, 90, 605, 155, 1, 4, 100, 280, 0.9, -65));
	menuBarArray.push(new MenuBar("Medium", 400, 220, 480, 100, 244, 237, 68, bar2, 440, 230, 175, 90, 575, 285, 2, 6, 80, 280, 1, -55));
	menuBarArray.push(new MenuBar("Hard", 400, 350, 480, 100, 233, 190, 62, bar3, 440, 360, 175, 90, 605, 415, 3, 10, 50, 180, 1.2, -45));

	gameReset();
	//frameRate(40);
}

function draw() {
	// music to play
	if (furretMusic.isPlaying() == false && winGameBoolean == false  && loseGameBoolean == false) {
		furretMusic.play();
	}

	if (startScreenBoolean == true && winGameBoolean == false  && loseGameBoolean == false) {
		startScreenStuff();
		furret.display();
	}

	else if (startScreenBoolean == false && winGameBoolean == false && loseGameBoolean == false) {
		parallaxBackground();
		objectStuff();
		furretStuff();

		reportData();

		if (recyclableObjectsCollected == numberOfRecyclableObjectsToWin) {
			winGameBoolean = true;
			background(255);
		}

		if (lives <= 0) {
			loseGameBoolean = true;
		}
	}

	else if (winGameBoolean == true) {
		winScreenStuff();
	}

	else if (loseGameBoolean == true) {
		loseScreenStuff();
	}
}

function keyPressed() {
	if (key == ' ') {
		if (startScreenBoolean == false && furret.jumping == false && keyIsDown(32)) {
			furret.jumping = true;
			furret.jump();
		}
	}
}

function updateRange(clickedRange) {
    // grab the range data as an integer
    rangeData = int(clickedRange.value);
}

class MainCharacter {
	constructor(imageArray, x, y) {
		this.imageArray = imageArray;
		this.x = x;
		this.y = y;
		this.currentImageIndex = 0;
		// this.gravity = 0.9;
		// this.lift = -65;
		this.velocity = 0;
		this.jumping = false;
		this.width = 250;
		this.height = 141;

		this.mainLeft = this.x - (this.width - 200) / 2;
		this.mainRight = this.x + (this.width - 30) / 2;
		this.mainTop = this.y - (this.height - 60) / 2;
		this.mainBottom = this.y + (this.height - 40) / 2;
	}

	display() {
		imageMode(CENTER);
		image(this.imageArray[this.currentImageIndex], this.x, this.y, this.width, this.height)
		
		if (this.jumping == false) {
			furretImageDelayCounter++;
		}

		if (furretImageDelayCounter % 2 == 0 && this.jumping == false) {
			this.currentImageIndex++;
		}

		if (this.currentImageIndex == this.imageArray.length) {
			this.currentImageIndex = 0;
		} 
	}

	jump() {
		this.velocity += this.lift;
		this.currentImageIndex = 4;

		// // different jump graphics
		// if (jumpCounter % 2 == 0) {
		// 	this.currentImageIndex = 4;
		// }

		// else if (jumpCounter % 2 == 1) {
		// 	this.currentImageIndex = 6;
		// }

		jumpCounter++;
	}

	update() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y >= furretStartY) {
			this.y = furretStartY;
			this.velocity = 0;
		}
	}

	collisionBox() {
		this.mainLeft = this.x - (this.width - 250) / 2;
		this.mainRight = this.x + (this.width - 30) / 2;
		this.mainTop = this.y - (this.height - 60) / 2;
		this.mainBottom = this.y + (this.height - 40) / 2;

		if (collisionLines == true) {
			strokeWeight(3);
			stroke(0, 255, 0);
			line(this.mainRight, this.mainTop, this.mainRight, this.mainBottom);
			line(this.mainLeft, this.mainTop, this.mainLeft, this.mainBottom);  
			line(this.mainLeft, this.mainBottom, this.mainRight, this.mainBottom);
			line(this.mainLeft, this.mainTop, this.mainRight, this.mainTop);
		}
	}
}

class Objects {
	constructor(type, image, posX, posY, sizeX, sizeY, collisionBoxLeft, collisionBoxRight, collisionBoxTop, collisionBoxBottom) {
		this.type = type;
		this.image = image;
		this.posX = posX;
		this.posY = posY;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.collisionBoxLeft = collisionBoxLeft;
		this.collisionBoxRight = collisionBoxRight;
		this.collisionBoxTop = collisionBoxTop;
		this.collisionBoxBottom = collisionBoxBottom;

		this.objectLeft = this.posX - (this.sizeX - this.collisionBoxLeft) / 2;
		this.objectRight = this.posX + (this.sizeX - this.collisionBoxRight) / 2;
		this.objectTop = this.posY - (this.sizeY - this.collisionBoxTop) / 2;
		this.objectBottom = this.posY + (this.sizeY - this.collisionBoxBottom) / 2;
	}

	display() {
		imageMode(CENTER);
		image(this.image, this.posX, this.posY, this.sizeX, this.sizeY);
	}

	update() {
		this.posX -= parallaxSpeed;
	}

	collisionBox() {
		this.objectLeft = this.posX - (this.sizeX - this.collisionBoxLeft) / 2;
		this.objectRight = this.posX + (this.sizeX - this.collisionBoxRight) / 2;
		this.objectTop = this.posY - (this.sizeY - this.collisionBoxTop) / 2;
		this.objectBottom = this.posY + (this.sizeY - this.collisionBoxBottom) / 2;

		if (collisionLines == true) {
			strokeWeight(3);
			stroke(0, 255, 0);
			line(this.objectRight, this.objectTop, this.objectRight, this.objectBottom);
			line(this.objectLeft, this.objectTop, this.objectLeft, this.objectBottom);  
			line(this.objectLeft, this.objectBottom, this.objectRight, this.objectBottom);
			line(this.objectLeft, this.objectTop, this.objectRight, this.objectTop);
		}
	}

	detectCollision() {
		// detect collision between main character and objects
	  	if (furret.mainRight < this.objectLeft || furret.mainLeft > this.objectRight || furret.mainBottom < this.objectTop || furret.mainTop > this.objectBottom) {
	  		// console.log("no collision!");
	  	}

	  	else {
	  		// console.log("collision!");

	  		// recyclable objects
	  		if (this.type == "good") {
	  			// force reset object's posY to somewhere way outside of the canvas
	  			this.posY = 3000;
	  			recyclableObjectsCollected++;

	  			scoreSound.play();

	  			// stop all sounds if win
	  			if (recyclableObjectsCollected == numberOfRecyclableObjectsToWin) {
	  				for (let i = 0; i < soundsArray.length; i++) {
						soundsArray[i].stop();
					}
	  			}
	  		}

	  		// non-recyclable objects
	  		else if (this.type == "bad") {
	  			// force reset object's posY to somewhere way outside of the canvas
	  			this.posY = 3000;
	  			lives--;

	  			pOuchNum = randomOuchNum;
		   	 	while (true) {
		   	 		randomOuchNum = Math.floor(random(0,3));
		   	 		if (randomOuchNum != pOuchNum) {
		   	 			break;
		   	 		}
		   	 	}
		   	 	if (randomOuchNum == 0) {
		   	 		ouchSound1.play();

		   	 	}
		   	 	else if (randomOuchNum == 1) {
		   	 		ouchSound2.play();
		   	 	}
		   	 	else {
		   	 		ouchSound3.play();
		   	 	}

		   	 	// stop all sounds if lose
	  			if (lives <= 0) {
	  				for (let i = 0; i < soundsArray.length; i++) {
						soundsArray[i].stop();
					}
	  			}
			}
		}
	}
}

class MenuBar {
	constructor(text, posX, posY, sizeX, sizeY, r, g, b, menuImage, menuPosX, menuPosY, menuSizeX, menuSizeY, textX, textY, level, parallaxSpeed, objectCoolDownLower, objectCoolDownUpper, gravity, lift) {
		this.text = text;
		this.posX = posX;
		this.posY = posY;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.r = r;
		this.g = g;
		this.b = b;
		this.menuImage = menuImage;
		this.menuPosX = menuPosX;
		this.menuPosY = menuPosY;
		this.menuSizeX = menuSizeX;
		this.menuSizeY = menuSizeY;
		this.textX = textX;
		this.textY = textY;
		this.level = level;
		this.parallaxSpeed = parallaxSpeed;
		this.objectCoolDownLower = objectCoolDownLower;
		this.objectCoolDownUpper = objectCoolDownUpper;
		this.gravity = gravity;
		this.lift = lift;
	}

	display() {
		stroke(255);
		fill(this.r, this.g, this.b);
		rect(this.posX, this.posY, this.sizeX, this.sizeY, 10);
		textSize(48);

		if (mouseX >= this.posX && mouseX <= this.posX + this.sizeX && mouseY >= this.posY && mouseY <= this.posY + this.sizeY) {
			// tint(255, 100);
			image(this.menuImage, this.menuPosX, this.menuPosY, this.menuSizeX, this.menuSizeY);
			// noTint();
			fill(0, 100);
		}
		
		else {
			image(this.menuImage, this.menuPosX, this.menuPosY, this.menuSizeX, this.menuSizeY);
			fill(0);
		}

		text(this.text, this.textX, this.textY);
	}

	checkPressed() {
		if (mouseIsPressed && mouseX >= this.posX && mouseX <= this.posX + this.sizeX && mouseY >= this.posY && mouseY <= this.posY + this.sizeY) {
			level = this.level;
			parallaxSpeed = this.parallaxSpeed;
			furret.gravity = this.gravity;
			furret.lift = this.lift;
			
			objectCoolDownLower = this.objectCoolDownLower;
			objectCoolDownUpper = this.objectCoolDownUpper;
			objectCoolDown = Math.floor(random(objectCoolDownLower, objectCoolDownUpper));
			
			clickSound.play();
			startScreenBoolean = false;
		}
	}
}

class Tear {
	constructor(y) {
		this.y = y;
	}
}

function startScreenStuff() {
	// imageMode(CORNER);
	// image(parallaxImage1, 0, 0);
	parallaxBackground();
	for (let i = 0; i < menuBarArray.length; i++) {
		menuBarArray[i].display();
		menuBarArray[i].checkPressed();
	}
}

function parallaxBackground() {
	imageMode(CORNER);
	image(parallaxImage1, parallax1X, 0);
	image(parallaxImage2, parallax2X, 0);

	parallax1X -= parallaxSpeed;
	parallax2X -= parallaxSpeed;

	if (parallax1X <= -1280) {
		parallax1X = 1280;
	}

	if (parallax2X <= -1280) {
		parallax2X = 1280;
	}
}

function furretStuff() {
	furret.display();
	furret.collisionBox();

	if (furret.velocity == 0) {
		furret.jumping = false;
	}

	furret.update();
}

function objectStuff() {
	for (let i = 0; i < objectArray.length; i++) {
		objectArray[i].display();
		objectArray[i].collisionBox();
		objectArray[i].update();
		objectArray[i].detectCollision();
	}

	objectCoolDown--;

	if (objectCoolDown == 0) {
		// roll dice for good or bad object
		let goodOrBadNum = Math.floor(random(2));
		// goodOrBadNum = 0;
		let object;

		if (goodOrBadNum == 0) {
			let goodObjectNum = Math.floor(random(goodObjectImageArray.length));
			// goodObjectNum = 5;
			object = new Objects("good", goodObjectImageArray[goodObjectNum][0], width + 100, goodObjectImageArray[goodObjectNum][1], goodObjectImageArray[goodObjectNum][2], goodObjectImageArray[goodObjectNum][3], goodObjectImageArray[goodObjectNum][4], goodObjectImageArray[goodObjectNum][5], goodObjectImageArray[goodObjectNum][6], goodObjectImageArray[goodObjectNum][7]);
		}

		else if (goodOrBadNum == 1) {
			let badObjectNum = Math.floor(random(badObjectImageArray.length));
			// badObjectNum = 5;
			object = new Objects("bad", badObjectImageArray[badObjectNum][0], width + 100, badObjectImageArray[badObjectNum][1], badObjectImageArray[badObjectNum][2], badObjectImageArray[badObjectNum][3], badObjectImageArray[badObjectNum][4], badObjectImageArray[badObjectNum][5], badObjectImageArray[badObjectNum][6], badObjectImageArray[badObjectNum][7]);
		}

		objectArray.push(object);

		objectCoolDown = Math.floor(random(objectCoolDownLower, objectCoolDownUpper));
	}

	// remove out of frame objects 
	for (let i = 0; i < objectArray.length; i++) {
		if (objectArray[i].posX < -500) {
			objectArray.splice(0, 1);
			//console.log("removed the first object");
		}
	}
}

function winScreenStuff() {

	if (winMusic.isPlaying() == false) {
		winMusic.play();
	}

	imageMode(CENTER);

	// tint(random(120, 255), random(120, 255), random(120, 255));
	image(dancingFurretImage, random(width), random(height), 40, 40 * 1.41356382979);
	noTint();

	// image(happyFurretImageArray[happyFurretCounter], width / 2, height / 2);
	// happyFurretCooldown++;

	// if (happyFurretCooldown % 2 == 0) {
	// 	happyFurretCounter++;

	// 	if (happyFurretCounter == happyFurretImageArray.length) {
	// 		happyFurretCounter = 0;
	// 	}
	// }

	image(recyclingBinImage, 1000, 410, 260, 260 * 1.4481409002);

	furretTinCounter++;
	image(furretHeadImage, 1015, 183, 240, 240 * 1.19854014599);

	image(winMessageArray[happyFurretCounter], 450, 105, 800, 800 * 0.24793388429);
	happyFurretCooldown++;

	if (happyFurretCooldown % 8 == 0 && happyFurretCounter < winMessageArray.length - 1) {
		happyFurretCounter++;
	}

	if (happyFurretCounter >= winMessageArray.length - 1) {
		winMessageCoolDown++;

		if (winMessageCoolDown < 150) {
			image(winMessageArray[winMessageArray.length - 1], 450, 105, 800, 800 * 0.24793388429);
		}

		else if (winMessageCoolDown % 150 <= 35) {
			image(winMessageArray[0], 450, 105, 800, 800 * 0.24793388429);
		}

		else {
			image(winMessageArray[winMessageArray.length - 1], 450, 105, 800, 800 * 0.24793388429);
		}
	}

	// restart button
	if (mouseX >= 20 && mouseX <= 160 && mouseY >= 535 && mouseY <= 580) {
		stroke(255);
		fill(233, 190, 62);
		rect(20, 535, 140, 45, 10);
		textSize(28);
		fill(255);
		noStroke();
		text("Restart", 43, 568);
	}

	else {
		stroke(255);
		fill(0);
		rect(20, 535, 140, 45, 10);
		textSize(28);
		fill(255);
		noStroke();
		text("Restart", 43, 568);
	}

	if (mouseIsPressed && mouseX >= 20 && mouseX <= 160 && mouseY >= 535 && mouseY <= 580) {
		clickSound.play();
		gameReset();
	}
}

function loseScreenStuff() {
	background(200, 196, 188);

	if (loseMusic.isPlaying() == false) {
		loseMusic.play();
	}

	imageMode(CENTER);
	image(sadFurretImage, width / 4, height / 2, 400, 423);

	if (tearCounter == tearRate) {
		tearArray.push(new Tear(tearY));
		tearCounter = 0;
	}

	tearCounter++;

	for (var i = 0; i < tearArray.length; i++) {
		image(tearDrop, 260, tearArray[i].y, 105, 105);
		tearArray[i].y += 1;
	}

	noStroke();
	fill(200, 196, 188);
	rect(0, 509, 520, 100);

	image(loseMessageArray[loseMessageCounter], 900, 200, 700, 700 * 0.31578947368);
	loseMessageCooldown++;

	if (loseMessageCooldown % 8 == 0 && loseMessageCounter < loseMessageArray.length - 1) {
		loseMessageCounter++;
	}

	// restart button
	if (mouseX >= 1125 && mouseX <= 1265 && mouseY >= 535 && mouseY <= 580) {
		stroke(255);
		fill(233, 190, 62);
		rect(1125, 535, 140, 45, 10);
		textSize(28);
		fill(255);
		noStroke();
		text("Restart", 1148, 568);
	}

	else {
		stroke(255);
		fill(0);
		rect(1125, 535, 140, 45, 10);
		textSize(28);
		fill(255);
		noStroke();
		text("Restart", 1148, 568);
	}

	if (mouseIsPressed && mouseX >= 1125 && mouseX <= 1265 && mouseY >= 535 && mouseY <= 580) {
		clickSound.play();
		gameReset();
	}
}

function reportData() {
	// stroke(0);
	// strokeWeight(1);
 	textSize(20);
 	fill(200, 196, 188);
 	rect(910, 20, 350, 85, 10);
 	noStroke();
 	fill(255);
 	text (lives + "       left", 925, 54);
 	image(heartImage, 955, 47, 25, 25);
 	text ("# of Recyclable Items Collected: " + recyclableObjectsCollected, 925, 86);
}

// called every time a word/phrase is detected
function parseResult() {
    // myRec.resultString is the current result
    // text(myRec.resultString, 25, 25);
    // console.log(myRec.resultString);

	// grab the most recent word (the word on the right side of the string)
	// do this by splitting th string and then taking the right most item
	let wordArray = myRec.resultString.split(' ');
	let mostRecentWord = wordArray[ wordArray.length - 1];

	// evaluate word
	// console.log(mostRecentWord);
	// if (mostRecentWord == "jump" && startScreenBoolean == false && furret.jumping == false) {
	// 	furret.jump();
	// 	furret.jumping = true;
	// }
}

function gameReset() {
	startScreenBoolean = true;
	lives = 5; 
	recyclableObjectsCollected = 0;
	numberOfRecyclableObjectsToWin = 10;
	tearArray = [];
	winGameBoolean = false;
	loseGameBoolean = false;
	furret.jumping = false;
	furret.currentImageIndex = 0;
	furretImageDelayCounter = 0;
	parallax1X = 0;
	parallax2X = 1280;
	parallaxSpeed = 4;
	objectArray = [];

	happyFurretCounter = 0;
	loseMessageCounter = 0;
	happyFurretCooldown = 0;
	loseMessageCooldown = 0;
	furretBinCounter = 0;
	furretTinCounter = 0;
	winMessageCoolDown = 0;

	furret.x = furretStartX;
	furret.y = furretStartY;

	for (let i = 0; i < soundsArray.length; i++) {
		soundsArray[i].stop();
	}

	// sound setup
	randomOuchNum = Math.floor(random(0,3));

	// roll dice for good or bad object
	let goodOrBadNum = Math.floor(random(2));
	// goodOrBadNum = 0;
	let object;

	if (goodOrBadNum == 0) {
		let goodObjectNum = Math.floor(random(goodObjectImageArray.length));
		// goodObjectNum = 5;
		object = new Objects("good", goodObjectImageArray[goodObjectNum][0], width - 200, goodObjectImageArray[goodObjectNum][1], goodObjectImageArray[goodObjectNum][2], goodObjectImageArray[goodObjectNum][3], goodObjectImageArray[goodObjectNum][4], goodObjectImageArray[goodObjectNum][5], goodObjectImageArray[goodObjectNum][6], goodObjectImageArray[goodObjectNum][7]);
	}

	else if (goodOrBadNum == 1) {
		let badObjectNum = Math.floor(random(badObjectImageArray.length));
		// badObjectNum = 5;
		object = new Objects("bad", badObjectImageArray[badObjectNum][0], width - 200, badObjectImageArray[badObjectNum][1], badObjectImageArray[badObjectNum][2], badObjectImageArray[badObjectNum][3], badObjectImageArray[badObjectNum][4], badObjectImageArray[badObjectNum][5], badObjectImageArray[badObjectNum][6], badObjectImageArray[badObjectNum][7]);
	}

	objectArray.push(object);
}

