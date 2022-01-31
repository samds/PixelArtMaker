/**
 * Toggles the background-color of the table data element.
 * @param {MouseEvent} event The click event.
 */
function toggleColor(event) {
	if (event.target.nodeName === 'TD') {
		const colorPicker = document.querySelector('#colorPicker');
		const color = colorPicker.value;
		event.target.style.backgroundColor = (event.target.style.backgroundColor == '' ? color : '');
	}
}

/**
 * Creates a table with the given number of rows and columns.
 * @param {Number} nbRows The number of rows.
 * @param {Number} nbColumns The number of columns.
 * @returns A new HTML table element.
 */
function createTable(nbRows, nbColumns) {
	const rows = [];
	for (let r = 0; r < nbRows; r++) {
		let tableRow = document.createElement('tr');
		for (let c = 0; c < nbColumns; c++) {
			const tableData = document.createElement('td');
			tableRow.appendChild(tableData);
		}
		rows.push(tableRow);
	}
	return rows;
}

/**
 * Clears the pixels canvas.
 */
function clearPixelCanvas() {
	while (pixelsCanvas.hasChildNodes()) {
		pixelsCanvas.removeChild(pixelsCanvas.lastChild);
	}
}

/**
 * Draws the pixel canvas on screen (as a HTML table).
 * @param {Number} nbRows The number of rows
 * @param {Number} nbColumns The number of columns
 */
function drawPixelCanvas(nbRows, nbColumns) {
	let tableRows = createTable(nbRows, nbColumns);
	tableRows.forEach(item => pixelsCanvas.appendChild(item));
}

/**
 * Makes the desired pixel canvas.
 * @param {MouseEvent} event The click event.
 */
function makeGrid(event) {
	event.preventDefault();

	const rows = document.querySelector('#inputHeight').value;
	const columns = document.querySelector('#inputWidth').value;

	clearPixelCanvas();
	drawPixelCanvas(rows, columns);
}

const pixelsCanvas = document.querySelector('#pixelCanvas');
pixelsCanvas.addEventListener('click', toggleColor);
const submitButton = document.querySelector("#sizePicker input[type='submit']");
submitButton.onclick = makeGrid;