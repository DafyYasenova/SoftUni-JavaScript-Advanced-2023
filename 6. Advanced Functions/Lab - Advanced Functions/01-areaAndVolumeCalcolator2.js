// 2 way with map:

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);

    let output = coordinates.map(point => {
        return {
            area: area.call(point),
            volume: vol.call(point),
        };
    });

    return output;
}


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));
/* [
  { area: 2, volume: 20 },
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
]
*/
console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));
/* [
  { area: 220, volume: 2200 },
  { area: 329, volume: 1645 },
  { area: 440, volume: 0 },
  { area: 10000, volume: 1000000 },
  { area: 4400, volume: 1100000 }
]
 */