function storeCatalogue(array) { // solution with array:
    let sortedCatalogue = array.sort((a, b) => a.localeCompare(b));
    let currentChar = '';
    for (let i = 0; i < sortedCatalogue.length; i++) {
        let [product, price] = sortedCatalogue[i].split(' : ');
       price = Number(price);
        let firstChar = product[0];

        if (currentChar !== firstChar) {
            console.log(firstChar)
            currentChar = firstChar;
        }
        console.log(`  ${product}: ${price}`);
    }
}
function storeCatalogue(array) { // solution with object:
    let sortedCatalogue = array.sort((a, b) => a.localeCompare(b));
    let currentChar = '';
    let storeObject = {};

    for (let i = 0; i < sortedCatalogue.length; i++) {
        let [product, price] = sortedCatalogue[i].split(' : ');
        if (!storeObject[product]) {
            storeObject[product] = 0;
        }
        storeObject[product] += Number(price);

        let firstChar = product[0];

        if (currentChar !== firstChar) {
            console.log(firstChar)
            currentChar = firstChar;
        }

        console.log(`  ${product}: ${storeObject[product]}`);
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
'Rubic`s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']);