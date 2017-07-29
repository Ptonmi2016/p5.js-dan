//create a object ball
var ball = {
	x : 300,
	y : 200,
	xSpeed : 4,
	ySpeed : 5
}

//p5.js default functions
function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);

	//calling personalized functions
	move();
	bounce();
	display();
}

//(MODULIZE)setup 3 functions move(), bounce() and display()
function move(){
	ball.x = ball.x + ball.xSpeed;
	ball.y = ball.y + ball.ySpeed;
}

function bounce(){
	if (ball.x > width || ball.x < 0){
		ball.xSpeed = ball.xSpeed * -1;
	}
	if (ball.y > height || ball.y < 0){
		ball.ySpeed = ball.ySpeed * -1;
	}
}

function display(){
	noStroke();
	fill(255,0,200);
	ellipse(ball.x,ball.y,50,50);
}
	
