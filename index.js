let gridSize = 16;
const container = document.querySelector('#container');
const button = document.querySelector('#button');
let mouseDown = false;
updateGrid(gridSize);
button.addEventListener('click', function () {
    gridSize = prompt();
    (gridSize > 100 || gridSize < 0 || isNaN(gridSize) || gridSize === null) ? updateGrid(16) : updateGrid(gridSize);
        

});
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

function drawGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }

  const squares = Array.from(document.querySelectorAll('.square'));
  squares.forEach((square) => {
    square.addEventListener('mouseover', draw);
    square.addEventListener('click', draw);
  });
}

function updateGrid(gridSize) {
    container.innerHTML = '';
    drawGrid(gridSize);
  }





function draw(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = 'black';
}
