let screen = document.getElementById("screen")

function nine() {
    screen.textContent += 9
}

function eight() {
    screen.textContent += 8
}

function seven() {
    screen.textContent += 7
}

function six() {
    screen.textContent += 6
}

function five() {
    screen.textContent += 5
}

function four() {
    screen.textContent += 4
}

function three() {
    screen.textContent += 3
}
function two() {
    screen.textContent += 2
}

function one() {
    screen.textContent += 1
}

function zero() {
    screen.textContent += 0
}

function twozero() {
    screen.textContent += "00"
}

function dot() {
    screen.textContent += "."
}

function plus() {
    screen.textContent += "+"
}
function min() {
    screen.textContent += "-"
}
function mul() {
    screen.textContent += "*"
}
function divide() {
    screen.textContent += "/"
}

function calculate() {
    screen.textContent = eval(screen.textContent)
}


function erase() {
    screen.textContent =  ""
}
function off() {
    screen.textContent  = screen.textContent.toString().slice(0, -1)
}