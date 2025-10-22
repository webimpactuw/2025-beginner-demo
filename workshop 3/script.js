const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function getName() {
    let name = document.getElementById("name-input");
    let userName = name.value;
    let output = document.getElementById("greeting-output");
    output.innerHTML = "Hi, " + userName + "!";
}

let clicked = false;
function changeFont() {
    let p = document.getElementById("demo");
    if(!clicked) {
        p.style.fontSize = "200%";
    } else {
        p.style.fontSize = "110%";
    }
    clicked = !clicked;
}

function disappear() {
    let p = document.getElementById("demo");
    if(!clicked) {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
    clicked = !clicked;
}

function generateNumber() {
    let rand = Math.floor(Math.random() * numbers.length);
    document.getElementById("numberList").innerHTML += numbers[rand] + ", ";
}

function generateColor () {
	let rand = Math.floor(Math.random() * colors.length);
	document.getElementById("colorList").innerHTML += colors[rand] + ', ';
}

function generateNumberbox () {
	let rand = Math.floor(Math.random() * numbers.length);  
    new_box = "<div class='box'>" + numbers[rand] + "</div>";  
    document.getElementById("numberboxList").innerHTML += new_box;
}
