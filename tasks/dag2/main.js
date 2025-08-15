let inputVare
let inputPris
let inputVaegt

let samletPris = 0;
let samletVaegt = 0;

let vareList = [];
let prisList = [];
let vaegtList = [];

function setup() {
    createCanvas(500, 500)
    inputVare = createInput();
    inputVare.position(70, 10);
    inputVare.attribute('placeholder', 'Indtast vare'); 
    inputPris = createInput();
    inputPris.position(70, 40);
    inputPris.attribute('placeholder', 'Indtast pris'); 
    inputVaegt = createInput();
    inputVaegt.position(70, 70);
    inputVaegt.attribute('placeholder', 'Indtast vægt');
}

function draw() {
    background(255);
    text("Vare", 10, 25);
    text("Pris", 10, 55);
    text("Vægt", 10, 85);
    text("Samlet pris: " + samletPris + " kr", 10, 150);
    text("Samlet vægt: " + samletVaegt + " kg", 10, 170);
    for (let i = 0; i < vareList.length; i++) {
        text("Vare: " + vareList[i] + " Pris: " + prisList[i] + " Vægt: " + vaegtList[i], 10, 200 + i * 20)
    }
}

function keyPressed() {
    if (keyCode != ENTER) return;
    if (inputVare.value() === '' || inputPris.value() === '' || inputVaegt.value() === '') {
        return;
    }
    if (Number(inputPris.value()) < 0 || Number(inputVaegt.value()) < 0) {
        return; 
    }
    if (!isNumeric(inputPris.value()) || !isNumeric(inputVaegt.value())) {
        return;
    }
    samletPris += Number(inputPris.value());
    samletVaegt += Number(inputVaegt.value());
    vareList.push(inputVare.value())
    inputVare.value('');
    prisList.push(inputPris.value())
    inputPris.value('');
    vaegtList.push(inputVaegt.value())
    inputVaegt.value('');
}

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}