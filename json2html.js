export default function json2html(data) {
    const headers = ["Name", "Age", "Gender"];

    let html = `<table data-user="shreshtamyana@gmail.com"><thead><tr>`;

    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += `</tr></thead><tbody>`;

    data.forEach(item => {
        html += `<tr>`;
        headers.forEach(header => {
            html += `<td>${item[header] || ''}</td>`;
        });
        html += `</tr>`;
    });

    html += `</tbody></table>`;
    return html;
}
