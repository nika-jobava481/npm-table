'use strict';

function getTableFor({
    containerID = '',
    headers = [],
    data = [],
    classMap = {},
    border = true
}) {
    const container = document.getElementById(containerID);

    if (container) {
        const table = document.createElement('table');

        if (border) {
            table.classList.add('border');
        }

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        for (const header of headers) {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        }

        thead.appendChild(headerRow);
        table.appendChild(thead);

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
        table.appendChild(tbody)
        container.appendChild(table);
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
