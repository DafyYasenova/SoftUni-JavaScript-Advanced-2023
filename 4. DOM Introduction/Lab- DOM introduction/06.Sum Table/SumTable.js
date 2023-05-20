// with slice for first and last element:
function sumTable() { 
    let row = Array.from(document.querySelectorAll('tr')).slice(1, -1);
    let sum = 0;

    for (let el of row) {
        let lastEl = Number(el.lastElementChild.textContent);
        sum += lastEl;
    }
    document.getElementById('sum').textContent = sum;

}
// 2 way:
function sumTable() {
    let row = Array.from(document.querySelectorAll('tr'));
    let sum = 0;

    for (let i = 1; i < row.length - 1; i++) {
        sum += Number(row[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}