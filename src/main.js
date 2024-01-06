'use strict';

function getTableFor({
    containerID = '',
    headers = [],
    data = [],
    classMap = {},
    border = true
}) {
    // Assuming you want to create a simple table and append it to the specified container
    const container = document.getElementById(containerID);

    if (container) {
        const table = document.createElement('table');

        // Apply the "border" class based on the 'border' parameter
        if (border) {
            table.classList.add('border');
        }

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        // Create header cells
        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        }

        thead.appendChild(headerRow);
        table.appendChild(thead);
        container.appendChild(table);

        // Assuming you also want to populate the table with data
        const tbody = document.createElement('tbody');
        for (const row of data) {
            const tr = document.createElement('tr');
            for (const cell of row) {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        table.appendChild(tbody);
    } else {
        console.error(`Container with ID '${containerID}' not found.`);
    }
}

getTableFor({
    headers: ['Column 1', 'Column 2', 'Column 3'],
    data: [
        ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
        ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
        ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3']
    ],
    containerID: 'mainbody',
    border: true
});
