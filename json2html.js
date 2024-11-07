export default function json2html(data) {
    // Extract table headers
    const headers = ["Name", "Age", "Gender"];
    
    // Begin constructing the HTML table string
    let html = `<table data-user="shreshtamyana@gmail.com"><thead><tr>`;
    
    // Append header cells
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += `</tr></thead><tbody>`;
    
    // Append rows for each object in the data array
    data.forEach(item => {
        html += `<tr>`;
        headers.forEach(header => {
            html += `<td>${item[header] || ''}</td>`;
        });
        html += `</tr>`;
    });
    
    // Close the table
    html += `</tbody></table>`;
    return html;
}
