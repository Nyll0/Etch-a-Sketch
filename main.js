document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');

  for (let i = 0; i < 16 * 16; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridContainer.appendChild(gridItem);
  }
});

//document.addEventListener('DOMContentLoaded', () => {
  //let gridItem = document.getElementsByClassName('grid-item');
  
//}