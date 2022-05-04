const Battle = require("./battle");
const {Eevee, Flareon, Bulbasaur} = require("./pokemon");
let Trainer = require("./trainer");
let trainersArray = [];
let eevee = {};
let flareon = {};
let bulbasaur = {};

describe("Battle", () => {
  beforeEach(() => {
    trainersArray = [new Trainer("Ash"), new Trainer("Misty")];
    eevee = new Eevee;
    flareon = new Flareon
    bulbasaur = new Bulbasaur
  });

  test("instance of battle should take  two trainers and the names of the pokemon they wish to battle", () => {
    trainersArray[0].catch('Eevee');
    trainersArray[1].catch('Bulbasaur');
    const testBattle = new Battle(
      trainersArray[0],
      trainersArray[1],
      trainersArray[0].pokemon[0],
      trainersArray[1].pokemon[0]
    );
    expect(testBattle.trainerA.name).toEqual("Ash");
    expect(testBattle.trainerB.name).toEqual("Misty");
    expect(testBattle.trainerAPokemon.name).toEqual("Eevee");
    expect(testBattle.trainerBPokemon.name).toEqual("Bulbasaur");
  });
  test("Instance of battle should have fight method which takes pokemon who's turn it is, attacks defending pokemon and deduct attacking pokemon's damage from defending pokemon's hp", () => {
    trainersArray[0].catch('eevee');
    trainersArray[1].catch('bulbasaur');
    const testBattle = new Battle(
      trainersArray[0],
      trainersArray[1],
      trainersArray[0].pokemon[0],
      trainersArray[1].pokemon[0]
    );
    testBattle.fight();
    expect(testBattle.trainerBPokemon.hitpoints).toEqual(27);
  });
  test("The fight method should take into account each pokemons strengths and weaknesses. Strong against weak damage is multiplied by 1.25. Weak against strong damage is multiplied by 0.75.", () => {
    trainersArray[0].catch('flareon');
    trainersArray[1].catch('bulbasaur');
    const testBattle = new Battle(
      trainersArray[0],
      trainersArray[1],
      trainersArray[0].pokemon[0],
      trainersArray[1].pokemon[0]
    );
    testBattle.fight();
    expect(testBattle.trainerBPokemon.hitpoints).toEqual(20);
    testBattle.fight();
    expect(testBattle.trainerAPokemon.hitpoints).toEqual(53);
  });
  test(`Each invokation of the fight method should return attack message after hitpoints have been reduced depending on the attack modifier
  '{pokemonName}'s {move} was ______ effective'
  modifier = 0: 'quite',
  modifier = 0.75: 'not very',
  modifier = 1.25: 'very'
  `, () => {
    trainersArray[0].catch('flareon');
    trainersArray[1].catch('bulbasaur');
    const testBattle = new Battle(
      trainersArray[0],
      trainersArray[1],
      trainersArray[0].pokemon[0],
      trainersArray[1].pokemon[0]
    );
    expect(testBattle.fight()).toEqual(`Flareon's Fire blast was very effective.`);
    expect(testBattle.fight()).toEqual(`Bulbasaur's Razor leaf was not very effective.`);
    // test for all combos especially normal vs others as in game not working as intended.
  })
  test(`If a pokemon's hitpoint's are reduced to 0, it faints and other pokemon wins`, () => {
    trainersArray[0].catch('flareon');
    trainersArray[1].catch('bulbasaur');
    const testBattle = new Battle(
      trainersArray[0],
      trainersArray[1],
      trainersArray[0].pokemon[0],
      trainersArray[1].pokemon[0]
    );
    testBattle.fight();
    testBattle.fight();
    expect(testBattle.fight()).toEqual(`Flareon's Fire blast was very effective. Bulbasaur fainted. Flareon wins!`);
    expect(testBattle.trainerBPokemon.hitpoints).toBeLessThan(0)
  })
});

//create class that extends from pokemon for each pokemon, .catch creates new instance of that pokemon
