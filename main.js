// Create a grid 
document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');

  for (let i = 0; i < 16 * 16; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);

              // Add event listener for mouseover
              gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = '#FF6347'; // Change to desired color
            });
    
            gridContainer.appendChild(gridItem);
  }

});

createGrid(16);

newGridButton.addEventListener()
