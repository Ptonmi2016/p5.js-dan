var on = false;

function setup() {
	createCanvas(800,600);
}

function draw() {
	if (on){
		background(255);
	}
	else{
		background(0);
	}	
	stroke(255,0,0);
	strokeWeight(4);
	ellipse(400,300,200,200);	
	if(mouseX < 500 && mouseX > 300 && mouseY > 200 && mouseY < 400){
		fill(0,255,0);
	}
	else{
		fill(0,100,0);
	}
}

function mousePressed(){
	if(mouseX < 500 && mouseX > 300 && mouseY > 200 && mouseY < 400){
		on = !on;
	}
}
