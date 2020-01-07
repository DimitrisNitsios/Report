let box1Element = document.getElementById("box1").innerHTML;
let box2Element = document.getElementById("box2").innerHTML;
let startClock = 0;

function loadBoxes() {
    startClock = Date.now();
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
        document.getElementById("box1").innerHTML = box2Element;
        document.getElementById("box2").innerHTML = box1Element;
    }
}

function submitChoices() {
    let time = (Date.now() - startClock) / 1000.0;
    document.getElementById("result").innerText = time + " Seconds and used method 1";
}

function submitText() {
    let time = (Date.now() - startClock) / 1000.0;
    document.getElementById("result").innerText = time + " Seconds and used method 2";
}