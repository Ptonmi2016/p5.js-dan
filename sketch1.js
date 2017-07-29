var ellipA = 0;
var b = 0;

function setup() {
	createCanvas(600,400);
}

function draw() {
	b = map(ellipA,0,400,100,0);
	background(0,0,b);
	noStroke();
	fill(255,0,0);
	ellipse(300,ellipA,100,100);
	ellipA = ellipA + 1;
	
		
}
