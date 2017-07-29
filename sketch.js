function setup() {
	createCanvas(640,400);
}

function draw() {
	background(100);
	//body
	fill(255,0,0);
	rect(85,150,60,120);
	//head
	fill(0,255,0);
	ellipse(115,120,120,60);
	//eyes
	fill(0,0,255);
	ellipse(85,120,30,50);
	
	fill(0,0,255);
	ellipse(145,120,30,50);
	//eyeballs
	fill(0);
	ellipse(85,120,30,30);
	
	fill(0);
	ellipse(145,120,30,30);
	//legs
	line(85,270,55,300);
	line(145,270,175,300);
	
}