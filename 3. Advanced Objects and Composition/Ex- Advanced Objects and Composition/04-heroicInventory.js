function heroicInventory(input) {
    let result = [];

    for (let line of input) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);

        items = items ? items.split(", ") : [];
        result.push({ name, level, items });
    }
    console.log(JSON.stringify(result));

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
/* [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
*/
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
/* [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]*/
