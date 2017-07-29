var ball = {
	x : 100,
	y : 100,
	speed : 4,
	display : function(){
		noStroke();
		fill(255,0,0);
		ellipse(this.x, this.y, 50, 50);
	},
	bounce : function(){
		if (this.y > height || this.y < 0){
			this.speed = this.speed * -1;
		}
		this.y = this.y + this.speed;
	}
};
//p5.js default functions
function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);
	ball.bounce();
	ball.display();
}

function bounce(positionX, positionY, speed){
	//create a object ball
	
}	
