const container = document.querySelector('.container');

const button = document.querySelector('button');

const defaultGridSize = 16;
let gridSize = defaultGridSize;

function createGrid(gridSize) {
    container.innerHTML = '';
    
    for (let i=0; i<gridSize; i++) {
        const rowGrid = document.createElement('div');
        rowGrid.classList.add('rowGrid');

        for (let j=0; j<gridSize; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');

            grid.addEventListener('mouseover', () => {
                grid.classList.add('drawn');
            });

            rowGrid.appendChild(grid);
        }

        container.appendChild(rowGrid);
    }
}

createGrid(gridSize)

button.addEventListener('click', () => {
    gridSize = parseInt(prompt("Please choose the number of squares.(From 1 to 100)"));
    if (!Number.isInteger(gridSize)){
        alert('Please enter an integer!');
        gridSize = defaultGridSize;
    }
    if (gridSize > 100) {
        gridSize = defaultGridSize;
    }
    createGrid(gridSize);
})
