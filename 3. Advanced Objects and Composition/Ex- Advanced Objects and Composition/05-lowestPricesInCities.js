function lowestPricesInCities(input) {

    let citiesObject = {};

    for (let line of input) {
        let [town, product, price] = line.split(" | ");
        price = Number(price);

        if (!citiesObject[product]) {
            citiesObject[product] = {
                town,
                price,
            }
        } else {
            if (citiesObject[product].price > price) {
                citiesObject[product] = {
                    town,
                    price,
                }
            }
        }
    }

    let citiesInfo = Object.entries(citiesObject);

    for (let [info, dataCities] of citiesInfo) {
        console.log(`${info} -> ${dataCities.price} (${dataCities.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
/* Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York)
*/