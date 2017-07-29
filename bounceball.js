var ellipA = 0;
var b = 0;
var speed = 2;

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0,0,b);
	noStroke();
	fill(255,0,0);
	ellipse(400,ellipA,200,200);
	if (ellipA > 800 || ellipA < -200){
		speed = speed * -1;
		b = map(ellipA,0,400,0,255);
	}
	b = map(ellipA,0,400,255,0);
	ellipA = ellipA + speed;		
}
