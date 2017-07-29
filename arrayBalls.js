var balls = [];
//p5.js default functions
function setup() {
	createCanvas(800,600);
	for (var i = 0; i < 5; i++){
		balls.push(new Ball());
	}
}

function draw() {
	background(0);
	for (var i = 0; i < balls.length; i++){
		balls[i].display();
		balls[i].bounce();
	}
}

function Ball(x, y){
	this.x = random(width);
	this.y = random(height);
	this.speed = 4;
	this.display = function(){
		noStroke();
		fill(255,0,0);
		ellipse(this.x, this.y, 50, 50);
	}
	this.bounce = function(){
		if (this.y > height || this.y < 0){
			this.speed = this.speed * -1;
		}
		this.y = this.y + this.speed;
	}
}