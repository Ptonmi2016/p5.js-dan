var ellipA = 0;
var b = 0;

function setup() {
	createCanvas(800,600);
}

function draw() {
	b = map(ellipA,0,400,255,0);
	background(0,0,b);
	noStroke();
	fill(255,0,0);
	ellipse(400,ellipA,100,100);
	ellipA = ellipA + 1;		
}
