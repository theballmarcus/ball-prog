var size_x = 500;
var size_y = 500;

var rects_x = 100;
var rects_y = 100;

let base_x = size_x / (rects_x + 2);
let base_y = size_y / (rects_y + 2);


let color_factor_x = 255 / rects_x;
let color_factor_y = 255 / rects_y;

let include_blue = true;
let released = true;

function setup() {
    createCanvas(size_x, size_y);
    background(255);
}

function draw() {
    if (rects_x > 10 || rects_y > 10) {
        strokeWeight(0);
    }
    else {
        strokeWeight(1);
    }
    for(let i = 0; i < rects_x; i++) {
        for(let j = 0; j < rects_y; j++) {
            if (include_blue) {
                fill(color(j * color_factor_y, i * color_factor_x, (color_factor_x*j + color_factor_y*i) / 2));
            } else {
                fill(color(j * color_factor_y, i * color_factor_x, (color_factor_x + color_factor_y) / 2));
            }

            rect(base_x + base_x*i, base_y + base_y*j, base_x, base_y)
        }
    }

    strokeWeight(1);
    fill(200);
    rect(10, 10, 100, 30);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(include_blue ? "Disable Blue" : "Enable Blue", 60, 25);
    if (mouseIsPressed && mouseX > 10 && mouseX < 110 && mouseY > 10 && mouseY < 40) {
        if (released == true) {
            include_blue = !include_blue;
            released = false;
        }
    }

    if (keyIsPressed) {
        if (keyCode === UP_ARROW) {
            rects_y++;
        } else if (keyCode === DOWN_ARROW) {
            rects_y = max(1, rects_y - 1);
        } else if (keyCode === LEFT_ARROW) {
            rects_x = max(1, rects_x - 1);
        } else if (keyCode === RIGHT_ARROW) {
            rects_x++;
        }
        
        base_x = size_x / (rects_x + 2);
        base_y = size_y / (rects_y + 2);
        color_factor_x = 255 / rects_x;
        color_factor_y = 255 / rects_y;
    }


    if (!mouseIsPressed) {
        released = true;
    }
}