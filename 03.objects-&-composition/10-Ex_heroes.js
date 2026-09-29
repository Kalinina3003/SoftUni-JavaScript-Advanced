// Task: Create a hero factory that can create fighters and mages.
// Description: Create fighters with name, health, stamina, and fight(),
// and mages with name, health, mana, and cast(), decreasing stamina or mana after each action.

function solve() {
    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    });

    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;

        }
    });

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        };

        return Object.assign(state, canFight(state));
    };

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100
        };

        return Object.assign(state, canCast(state));
    };

    return {
        mage,
        fighter
    };
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
// Scorcher cast fireball
// Scorcher cast thunder
// Scorcher cast light
// Scorcher 2 slashes at the foe!
// 99
// 97;