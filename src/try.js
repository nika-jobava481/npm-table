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
            if (header.condition) {
                const th = document.createElement('th');
                th.textContent = header.name;
                headerRow.appendChild(th);
            }
        }
        const conditionsList = []
        for (let i = 0; i < data.length; i++) {
            conditionsList.push(data[i].condition && headers[i].condition)
        }


        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        for (const row of data) {
            const tr = document.createElement('tr');
            for (let i=0;i<row.data.length;i++) {
                if (conditionsList[i]) {
                    const td = document.createElement('td');
                    td.textContent = row.data[i];
                    tr.appendChild(td);
                }
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody)
        container.appendChild(table);
    } else {
        console.error(`Container with ID '${containerID}' not found.`);
    }
}

var tableheaders = [
    {
        name: 'Column 1',
        condition: true
    },
    {
        name: 'Column 2',
        condition: true
    },
    {
        name: 'Column 3',
        condition: true
    },
]

var tabledata = [
    {
        data: ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
        condition: true
    },
    {
        data: ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
        condition: true
    },
    {
        data: ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'],
        condition: true
    },

]


getTableFor({
    headers: tableheaders,
    data: tabledata,
    containerID: 'mainbody',
    border: true
});
