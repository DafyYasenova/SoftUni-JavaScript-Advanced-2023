function cityRecord(name, population, treasury){

    let city = {
        name: name,
        population: population,
        treasury: Number(treasury),
    }
    return city;
}
console.log(cityRecord('Tortuga',7000,15000));