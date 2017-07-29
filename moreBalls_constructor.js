//create new objects
var ballA = new Ball(100,100, 4);
var ballB = new Ball(200,100, 5);
var ballC = new Ball(300,100, 6);
//p5.js default functions
function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);
	//calling newobjects.methods();
	ballA.display();
	ballA.bounce();
	ballB.display();
	ballB.bounce();
	ballC.display();
	ballC.bounce();
}

//constructor for create object Ball with 3 parameters: x, y, speed
//2 methods display() and bounce();
function Ball(x, y, speed){
	this.x = x;
	this.y = y;
	this.speed = speed;
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
