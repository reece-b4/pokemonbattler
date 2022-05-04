const {
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
} = require("./pokemon");

class Trainer {
  constructor(name) {
    const capitalisedName = name.replace(name[0], name[0].toUpperCase())
    this.name = capitalisedName;
    this.pokemon = [];
  }
  catch(pokemon) {
    if (this.pokemon.length < 6) {
      const lowerCasePokemon = pokemon.toLowerCase();
      switch (lowerCasePokemon) {
        case "eevee":
          this.pokemon.push(new Eevee());
          break;
        case "flareon":
          this.pokemon.push(new Flareon());
          break;
        case "vaporeon":
          this.pokemon.push(new Vaporeon());
          break;
        case "leafeon":
          this.pokemon.push(new Leafeon());
          break;
        case "charmander":
          this.pokemon.push(new Charmander());
          break;
        case "squirtle":
          this.pokemon.push(new Squirtle());
          break;
        case "bulbasaur":
          this.pokemon.push(new Bulbasaur());
          break;
        default:
          console.log("not a valid pokemon");
      }
    }
  }
}

// catch method should check again list of actual pokemon?

module.exports =  Trainer;
