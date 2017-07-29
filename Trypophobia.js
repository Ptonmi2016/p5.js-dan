var spot = {
	x : 50,
	y : 50
};
var col = {
	r : 0,
	g : 0,
	b : 0,
	t : 0
};

function setup() {
	createCanvas(800,600);
	background(0);
}

function draw() {
	noStroke();
	col.r = random(0,255);
	col.b = random(0,255);
	col.t = random(0,100);
	fill(col.r,col.g,col.b,col.t);
	spot.x = random(0,width);
	spot.y = random(0,height);
	ellipse(spot.x,spot.y,20,20)
}
