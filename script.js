const grid = document.getElementById('grid');
const sliderInput = document.getElementById('slider');
const sizeSpan = document.getElementById('size-text');

sliderInput.addEventListener('input', gridUpdate);
grid.addEventListener('mouseover', paintSquareOnHover);


function generateGrid(gridSize) {
    grid.replaceChildren();
    for (let y = 0; y < gridSize; y++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let x = 0; x < gridSize; x++) {
            let cell = document.createElement('cell');
            cell.className = 'cell';
            cell.id = x + ',' + y;
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function paintSquareOnHover(event){
    if (event.target.className == 'cell') {
        event.target.style.backgroundColor = 'black';
    }
}

function gridUpdate() {
    sizeSpan.textContent = sliderInput.value;
    generateGrid(sliderInput.value);
}
gridUpdate();