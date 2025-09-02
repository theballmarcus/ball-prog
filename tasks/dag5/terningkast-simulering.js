var size_x = 500;
var size_y = 500;

var dice_throws = [];
var nDice_throws = 20;

var padding = 4;
var offset = size_x / nDice_throws;

var pressed = false;

function setup() {
    createCanvas(size_x, size_y);
    background(255);
    fill_array()
}

function draw() {
    background(255);
    text(dice_throws.join(", "), 10, 10);

    var max_dice = max(dice_throws);
    for(let i = 0; i < dice_throws.length; i++) {
        if (dice_throws[i] === max_dice) {
            fill(255, 0, 0);
        } else {
            fill(0, 0, 255);
        }
        rect(padding / 2 + i * offset, size_y - dice_throws[i] * offset, offset - padding, dice_throws[i] * offset);
    }

    fill(0);
    rect(10, 30, 100, 30);
    fill(255);
    text("Rethrow", 40, 50);
    if (mouseIsPressed && mouseX > 10 && mouseX < 110 && mouseY > 30 && mouseY < 60 && pressed == false) {
        fill_array();
        pressed = true;
    }
    if(!mouseIsPressed) {
        pressed = false;
    }
}

function fill_array() {
    dice_throws = []
    for(let i = 0; i < nDice_throws; i++) {
        dice_throws.push(floor(random(1, 7)))
    }
    
}