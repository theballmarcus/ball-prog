var size_x = 500;
var size_y = 500;

function setup() {
    createCanvas(size_x, size_y);
    background(255);
}

function draw() {
    let base_x = size_x / 12;
    let base_y = size_y / 12;

    let color_factor = 255 / 10;

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            fill(color(j * color_factor, i * color_factor, 0));
            rect(base_x + base_x*i, base_y + base_y*j, base_x, base_y)
        }
    }
}