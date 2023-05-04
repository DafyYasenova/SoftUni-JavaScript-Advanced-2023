function townPopulation(array) {
    let towns = {};

    for (let i = 0; i < array.length; i++) {

        let currentLine = array[i].split(' <-> ');
        let currentTown = currentLine[0];
        let population = Number(currentLine[1]);

        if (!towns.hasOwnProperty(currentTown)) {
            towns[currentTown] = 0;
        }
        towns[currentTown] += population;

    }
    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
/* Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
*/
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
/* Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
*/