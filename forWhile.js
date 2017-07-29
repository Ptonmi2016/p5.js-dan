function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(3);
	for (x = 0; x <= width; x += 50) {
		for(y = 0; y <= width; y += 50){
			fill(random(255), 0, 200);
			ellipse(x, y, 25, 25);
		}
	}
}