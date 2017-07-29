function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	ellipse(400,300,200,200);
	if(mouseX > 400 || mouseY > 300){
		fill(0,255,0);
	}
	else{
		fill(255,0,0);
	}
}
