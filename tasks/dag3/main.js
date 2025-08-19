var size_x = 500;
var size_y = 500;

var rects_x = 100;
var rects_y = 100;

let base_x = size_x / (rects_x + 2);
let base_y = size_y / (rects_y + 2);

let color_factor_x = 255 / rects_x;
let color_factor_y = 255 / rects_y;

function setup() {
    createCanvas(size_x, size_y);
    background(255);
    strokeWeight(0);
}

function draw() {
    for(let i = 0; i < rects_x; i++) {
        for(let j = 0; j < rects_y; j++) {
            fill(color(j * color_factor_y, i * color_factor_x, 0));
            rect(base_x + base_x*i, base_y + base_y*j, base_x, base_y)
        }
    }
}