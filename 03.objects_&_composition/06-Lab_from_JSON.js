// Task: From JSON to HTML Table.
// Description: Parse JSON data and create an HTML table
// using object keys as headings and object values as table entries.
// Escape special HTML characters in text values.

function fromJSONToHTMLTable(input) {
    const students = JSON.parse(input);

    let result = '<table>\n';
    result += '     <tr>';

    for (let key of Object.keys(students[0])) {
        result += `<th>${key.trim()}</th>`;
    }

    result += '</tr>\n';

    for (let student of students) {
        result += '     <tr>';

        for (let key of Object.keys(student)) {
            let value = student[key];

            if (typeof value === 'string') {
                value = value
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
            }

            result += `<td>${value}</td>`;
        }

        result += '</tr>\n';
    }

    result += '</table>';

    console.log(result);
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
);
// <table>
//    <tr><th>Name</th><th>Score</th></tr>
//    <tr><td>Stamat</td><td>5.5</td></tr>
//    <tr><td>Rumen</td><td>6</td></tr>
// </table>

fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);
// <table>
//    <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
//    <tr><td>Pesho</td><td>4</td><td>8</td></tr>
//    <tr><td>Gosho</td><td>5</td><td>8</td></tr>
//    <tr><td>Angel</td><td>5.5</td><td>10</td></tr>
// </table>