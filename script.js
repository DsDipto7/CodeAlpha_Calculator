// Declare and link themeToggle to the toggle button in the HTML
const themeToggle = document.getElementById('themeToggle'); // Ensure this ID exists in your HTML

const calcDisplay = document.getElementById('calcDisplay');
const historyList = document.getElementById('historyList');
let memory = 0;

// Insert value to display
function insert(value) {
    calcDisplay.value += value;
}

// Clear display
function clearDisplay() {
    calcDisplay.value = '';
}

// Perform calculations
function calculate() {
    try {
        const result = eval(calcDisplay.value);
        historyList.innerHTML += `<li>${calcDisplay.value} = ${result}</li>`;
        calcDisplay.value = result;
    } catch {
        calcDisplay.value = 'Error';
    }
}

// Insert scientific function
function insertFunction(func) {
    calcDisplay.value += func;
}

// Memory operations
function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    calcDisplay.value += memory;
}

function memoryStore() {
    memory = eval(calcDisplay.value || '0');
}

function memoryAdd() {
    memory += eval(calcDisplay.value || '0');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.calculator-container').classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('.display').classList.toggle('dark');
    document.querySelector('.buttons').classList.toggle('dark');
    document.querySelector('.history').classList.toggle('dark');
});
