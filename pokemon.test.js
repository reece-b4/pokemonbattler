const { expect } = require("expect");
const { Pokemon } = require("./pokemon");

describe("Pokemon", () => {
      test("Instance of pokemon should have property of name with value of name argument",
      () => {
        const testPokemon = new Pokemon("Pikachu");
        expect(testPokemon.name).toEqual("Pikachu");
      });
      test("Instance of Pokemon should have property of hitpoints with value of hitpoints argument or 10 as default",
      () => {
        const testPokemon = new Pokemon("Pikachu", 15);
        const testPokemon2 = new Pokemon("Pikachu");
        expect(testPokemon.hitpoints).toEqual(15);
        expect(testPokemon2.hitpoints).toEqual(10);
      })
      test("Instance of pokemon should have property of talk with the value of first 3 characters of name followed by ... <name>!",
      () => {
        const testPokemon = new Pokemon("Pikachu");
        expect(testPokemon.talk).toEqual("Pik...Pikachu!");
      });
      test("Instance of Pokemon should have property of attackDamage with the value of argument attackDamage or 4 as default", () => {
        const testPokemon = new Pokemon("Pikachu", undefined, 6);
        const testPokemon2 = new Pokemon("Pikachu", undefined);
        expect(testPokemon.attackDamage).toEqual(6)
        expect(testPokemon2.attackDamage).toEqual(4)
      })
      test("Instance of Pokemon should have property of move with the value of argument move", () => {
        const testPokemon = new Pokemon("Pikachu", undefined, undefined, "punch");
        expect(testPokemon.move).toEqual('punch')
      })
      test("Instance of Pokemon should have property of type with value of argument type, limited to normal, grass, water, fire and defaults to normal", () => {
          const testPokemon = new Pokemon("Pikachu", undefined, undefined, undefined);
          const testPokemon2 = new Pokemon("Pikachu", undefined, undefined,  undefined, 'fire');
          const testPokemon3 = new Pokemon("Pikachu", undefined, undefined,  undefined, 'earth');
          expect(testPokemon.type).toEqual('normal')
          expect(testPokemon2.type).toEqual('fire');
          expect(testPokemon3.type).toEqual('earth');
      })
      test(`Instance of Pokemon should have an appropriate weakness and strength according to the following.
      Fire strong against grass, weak against water.
      Grass strong against water, weak against fire.
      Water strong against fire, weak against grass.
      Normal pokemon have no strengths or weaknesses.
      `, () => {
          const testPokemon = new Pokemon("Pikachu", undefined, undefined, undefined, 'normal');
          const testPokemon2 = new Pokemon("Pikachu", undefined, undefined, undefined, 'fire');
          const testPokemon3 = new Pokemon("Pikachu", undefined, undefined, undefined, 'grass');
          const testPokemon4 = new Pokemon("Pikachu", undefined, undefined, undefined, 'water');
          expect(testPokemon.strength).toEqual('none');
          expect(testPokemon.weakness).toEqual('none');
          expect(testPokemon2.strength).toEqual('grass');
          expect(testPokemon2.weakness).toEqual('water');
          expect(testPokemon3.strength).toEqual('water');
          expect(testPokemon3.weakness).toEqual('fire');
          expect(testPokemon4.strength).toEqual('fire');
          expect(testPokemon4.weakness).toEqual('grass');
      })
      test("Instance of Pokemon should have property of useYourMove which returns its favourite move", () => {
        const testPokemon = new Pokemon('Pikachu', undefined, undefined, 'punch');
        expect(testPokemon.useYourMove()).toEqual('punch')
      })
  });
