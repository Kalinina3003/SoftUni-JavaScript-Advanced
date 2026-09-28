// Task: Create a register of heroes with their names, levels, and items.
// Description: Parse each hero's data, create an object with the required
// properties, store all heroes in an array, and print the result as JSON.

function heroicInventory(arr) {
    let heroes = [];

    for (let data of arr) {

        if (data.trim() === '') {
            continue;
        }
        
        let [name, level, items] = data.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : []
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}];

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}];