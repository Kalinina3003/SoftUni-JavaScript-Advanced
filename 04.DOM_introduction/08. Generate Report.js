// Task: Generate Report 
// Description: Generate a JSON report from an HTML table using only selected columns. 
// Use the header checkboxes to determine which properties to include. 
// Create an object for each table row and display the resulting array as a JSON string.

function generateReport() {
    const tableRows = document.querySelectorAll('table tr');
    const headers = tableRows[0].querySelectorAll('th');

    const selectedColumns = [];

    for (let i = 0; i < headers.length; i++) {
        const checkbox = headers[i].querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            selectedColumns.push({
                index: i,
                name: checkbox.name
            });
        }
    }

    const report = [];

    for (let i = 1; i < tableRows.length; i++) {
        const cells = tableRows[i].querySelectorAll('td');
        const employee = {};

        for (const column of selectedColumns) {
            employee[column.name] = cells[column.index].textContent.trim();
        }

        report.push(employee);
    }

    document.querySelector('#output').value = JSON.stringify(report);
}
