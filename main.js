// Get DOM elements
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const saveBtn = document.getElementById('save');
const scoresList = document.getElementById('scores-list');

// Initialize counter value
let count = 0;

// Update counter display
function updateCounter() {
    counter.textContent = count;
}

// Increment counter
incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
    playSound('increment');
});

// Decrement counter
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
        playSound('decrement');
    }
});

// Save score
saveBtn.addEventListener('click', () => {
    if (count > 0) {
        const scoreItem = document.createElement('li');
        scoreItem.textContent = `Score: ${count}`;
        scoresList.insertBefore(scoreItem, scoresList.firstChild);
        playSound('save');
        
        // Reset counter after saving
        count = 0;
        updateCounter();
    }
});

// Simple sound effect function
function playSound(action) {
    // You can add actual sound effects here later
    console.log(`${action} sound played`);
}

// Add keyboard controls
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
        case '+':
            incrementBtn.click();
            break;
        case 'ArrowDown':
        case '-':
            decrementBtn.click();
            break;
        case 'Enter':
        case 's':
            saveBtn.click();
            break;
    }
});
