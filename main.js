// DS ASGN EXAMPLE

// CREATE DATA STRUCTURE to store information about given topic...
// 3 main types of topics: Numerical Data, Text Data, Complex/Blended Data
// Create data structure in a variety of ways: declare, use loops (pattern, random), from user input, from file

// DO STUFF WITH THE DATA - Access, Modify, Display, Search, Count, Add/Remove, Perform Calculations, ...

// DOM ELEMENTS
let outputEl = document.getElementById('output');

// Create Data Structure
let colors = ['red', 'green', 'blue', 'orange', 'purple'];

// Main Menu
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get selected option from <select> element
    let selection = document.getElementById('menu').value;

    // Take action based on selection
    if (selection == 'displayAll') {
        displayAllColors();
    } else if (selection == 'displayShort') {
        displayShort();
    } else if (selection == 'removeShort') {
        removeShort();
    } else if (selection == 'addColor') {
        addColor();
    }
}

// HELPER FUNCTIONS
function displayAllColors() {
    outputEl.innerHTML = "";
    for (let i = 0; i < colors.length; i++) {
        let pEl = document.createElement('p');
        pEl.innerHTML = colors[i];
        pEl.style.backgroundColor = colors[i];
        pEl.style.color = "white";
        outputEl.append(pEl);
    }
}

function displayShort() {
    outputEl.innerHTML = "";

    let shortCount = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].length <= 4) {
            shortCount++;
            
            let pEl = document.createElement('p');
            pEl.innerHTML = colors[i];
            pEl.style.backgroundColor = colors[i];
            pEl.style.color = "white";
            outputEl.append(pEl);
        }
    }

    outputEl.innerHTML += 'Short Count: ' + shortCount;
}


function removeShort() {
    let shortCount = 0;
    for (let i = colors.length - 1; i >= 0; i--) {
        if (colors[i].length <= 4) {
            shortCount++;
            colors.splice(i, 1);
        }
    }

    outputEl.innerHTML = '# of Short Colors Removed: ' + shortCount;
}

function addColor() {
    let newColor = prompt("Enter a color: ");
    colors.push(newColor);

    outputEl.innerHTML = "New Color Added: " + newColor;
}