let isErasing = false;
let currentColor = '#000000';

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing grid
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect
        square.addEventListener('mouseover', () => {
            if (isErasing) {
                square.style.backgroundColor = 'white';
                square.style.opacity = 1;
            } else {
                square.style.backgroundColor = currentColor;
                darkenSquare(square);
            }
        });

        container.appendChild(square);
    }
}

function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity) || 0;
    if (opacity < 1) {
        opacity += 0.1;
        square.style.opacity = opacity;
    }
}

document.getElementById('gridSize').addEventListener('input', (event) => {
    const newSize = event.target.value;
    document.getElementById('gridSizeValue').textContent = newSize;
    createGrid(newSize);
});

document.getElementById('colorPicker').addEventListener('input', (event) => {
    currentColor = event.target.value;
});

document.getElementById('eraserButton').addEventListener('click', () => {
    isErasing = !isErasing;
    document.getElementById('eraserButton').textContent = isErasing ? 'Drawing' : 'Eraser';
});

// Initialize grid with default size
createGrid(16);
