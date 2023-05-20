function colorize() {
    let tableRow = Array.from(document.querySelectorAll('tr'));

    for (let i = 1; i < tableRow.length; i += 2) {
        tableRow[i].style.background = 'teal';
    }
    return tableRow;
}

//2 way: with (nth-child)
function colorize() {
    let tableRow = document.querySelectorAll('tr:nth-child(2n)');

    for (let i = 0; i < tableRow.length; i ++) {
        tableRow[i].style.background = 'teal';
    }
    return tableRow;
}