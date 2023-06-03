function argumentInfo() {

    let object = {};

    Array.from(arguments).forEach((element) => {
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if (!object[type]) {
            object[type] = 0;
        }
        object[type]++;

    });

    let sorted = Object.keys(object).sort((a, b) => object[b] - object[a]);
    for (let key of sorted) {
        console.log(`${key} = ${object[key]}`);
    }
    // 2 way for sort and print
     Object.keys(object)
     .sort((a, b) => object[b] - object[a])
    .forEach((key)=> console.log(`${key} = ${object[key]}`));
    
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
/* 
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
*/