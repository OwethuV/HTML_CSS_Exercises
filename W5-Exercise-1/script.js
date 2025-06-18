let generateBtn = document.getElementById("generateButton");
let resetBtn = document.getElementById("resetButton");
let spellArea = document.getElementById("spellArea");
let ingredientsList = document.getElementById("ingredientsList");
let ingredients = ingredientsList.getElementsByTagName("li");

function getRandomIngredient() {
    let index = Math.floor(Math.random() * ingredients.length);
    return ingredients[index].textContent;
}

function getRandomColor() {
    let r = Math.floor(100 + Math.random() * 155);
    let g = Math.floor(100 + Math.random() * 155);
    let b = Math.floor(100 + Math.random() * 155);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function disableButtons() {
    generateBtn.disabled = true;
    resetBtn.disabled = true;
    generateBtn.style.opacity = "0.6";
    resetBtn.style.opacity = "0.6";
    generateBtn.style.cursor = "default";
    resetBtn.style.cursor = "default";
}

function enableButtons() {
    generateBtn.disabled = false;
    resetBtn.disabled = false;
    generateBtn.style.opacity = "1";
    resetBtn.style.opacity = "1";
    generateBtn.style.cursor = "pointer";
    resetBtn.style.cursor = "pointer";
}

function countdown(seconds, callback) {
    let current = seconds;
    spellArea.textContent = "Casting spell in " + current + "...";
    let interval = setInterval(function () {
        current--;
        if (current > 0) {
            spellArea.textContent = "Casting spell in " + current + "...";
        } else {
            clearInterval(interval);
            callback();
        }
    }, 1000);
}

generateBtn.onclick = function () {
    disableButtons();
    countdown(3, function () {
        let spell = getRandomIngredient();
        spellArea.textContent = "Your spell: " + spell;
        spellArea.style.backgroundColor = getRandomColor();
        enableButtons();
    });
};

resetBtn.onclick = function () {
    spellArea.textContent = "Your magical spell will appear here.";
    spellArea.style.backgroundColor = "#444";
};