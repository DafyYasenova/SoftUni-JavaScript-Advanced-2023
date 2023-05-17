function fromJSONToHTMLTable(input) {

    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    let lineInfo = Object.keys(arr[0]);

    outputArr.push(`  <tr>${lineInfo.map(el => `<th>${escapeHtml(el)}</th>`).join('')}</tr>`);

    for (let entry of arr) {
        outputArr.push(`  <tr>${lineInfo.map(el => `<td>${escapeHtml(entry[el])}</td>`).join('')}</tr>`);
    }
    outputArr.push("</table>");
    return outputArr.join('\n');

    function escapeHtml(el) {
        return el
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}

console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`));
