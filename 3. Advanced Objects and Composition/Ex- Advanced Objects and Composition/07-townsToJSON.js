function townsToJSON(array) {

    let townsArray = [];
    let townsToJSONFormat = [];

    let line = array.shift().split(" ");
    line = line.filter((x) => x !== ("|"));

    for (let i = 0; i < array.length + 1; i++) {
        let townsObject = {};
        let lineInfo = array.shift().split("|");
        for (let el of lineInfo) {
            if (el.length > 0) {
                townsArray.push(el.trim());
            }
        }
            townsObject[line[0]] = townsArray[0];
            townsObject[line[1]] = Number(Number(townsArray[1]).toFixed(2));
            townsObject[line[2]] = Number(Number(townsArray[2]).toFixed(2));

            townsToJSONFormat.push(townsObject);
            townsArray = [];
    }
            return JSON.stringify(townsToJSONFormat);
}
 console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']));

