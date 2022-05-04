const Trainer = require("./trainer");

describe("Trainer", () => {
  test("Instance of trainer should have a name property with value of argument name given", () => {
    const testTrainer = new Trainer("Ash");
    expect(testTrainer.name).toEqual("Ash");
  });
  test("Instance of trainer has a pokemon array to store pokemon", () => {
    const testTrainer = new Trainer("Ash");
    expect(testTrainer.pokemon).toEqual([]);
  });
  test("Instance of trainer has a property of catch with method to add pokemon to pokemon array as its value", () => {
    const testTrainer = new Trainer("Ash");
    testTrainer.catch('Eevee');
    testTrainer.catch('Flareon');
    testTrainer.catch('Vaporeon');
    testTrainer.catch('Leafeon');
    testTrainer.catch('Squirtle');
    testTrainer.catch('Bulbasaur');
    testTrainer.catch('Charmander');
    expect(testTrainer.pokemon[0].name).toEqual('Eevee');
    expect(testTrainer.pokemon[1].name).toEqual('Flareon');
    expect(testTrainer.pokemon[2].name).toEqual('Vaporeon');
    expect(testTrainer.pokemon[3].name).toEqual('Leafeon');
    expect(testTrainer.pokemon[4].name).toEqual('Squirtle');
    expect(testTrainer.pokemon[5].name).toEqual('Bulbasaur');
  });
});
