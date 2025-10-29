// These are the arrays you'll use to generate random items.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function generateNumber() {
    // TODO 1: Create a random index.
    // Hint: Use Math.random() * numbers.length
    // Don't forget to wrap it in Math.floor() to get a whole number.
    let rand = /* ...your code here... */;

    // TODO 2: Get the random number from the 'numbers' array using your index.
    let randomNumber = numbers[rand];

    // TODO 3: Add the number to the 'numberList' div.
    // Hint: Use document.getElementById("numberList").innerHTML += ...
    // (Don't forget to add a comma and space ", " so they look nice!)
    document.getElementById("numberList").innerHTML += /* ...your code here... */;
}

function generateColor() {
    // TODO 4: Create a random index for the 'colors' array.
    // (This is just like TODO 1, but for the 'colors' array)
    let rand = /* ...your code here... */;

    // TODO 5: Get the random color from the 'colors' array.
    let randomColor = /* ...your code here... */;

    // TODO 6: Add the color to the 'colorList' div.
    // (Don't forget your comma and space!)
    document.getElementById("colorList").innerHTML += /* ...your code here... */;
}

function generateNumberbox() {
    // TODO 7: Create a random index for the 'numbers' array.
    let rand = /* ...your code here... */;

    // TODO 8: Get the random number from the 'numbers' array.
    let randomNumber = /* ...your code here... */;

    // TODO 9: This is the tricky one!
    // Create a *new string* of HTML that looks like:
    // "<div class='box'>NUMBER</div>"
    // where NUMBER is the randomNumber you got in the last step.
    // Store this string in a new variable called 'newBox'.
    let newBox = "<div class='box'>" + /* ...your code here... */ + "</div>";

    // TODO 10: Add the 'newBox' string to the 'numberboxList' div.
    document.getElementById("numberboxList").innerHTML += /* ...your code here... */;
}