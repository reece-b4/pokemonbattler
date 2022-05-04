class Pokemon {
  constructor(name, hitpoints = 10, attackDamage = 4, move, type = "normal") {
    this.name = name;
    this.type = type;
    if (!["fire", "water", "grass"].includes(type)) {
      type = "normal";
    }
    if (type === "fire") {
      this.strength = "grass";
      this.weakness = "water";
    } else if (type === "grass") {
      this.strength = "water";
      this.weakness = "fire";
    } else if (type === "water") {
      this.strength = "fire";
      this.weakness = "grass";
    } else if (type == "normal") {
      this.strength = "none";
      this.weakness = "none";
    }
    this.hitpoints = hitpoints;
    this.move = move;
    this.attackDamage = attackDamage;
    this.talk = `${name.slice(0, 3)}...${name}!`;
  }
  useYourMove() {
    return this.move;
    // this is not used anywhere
  }
}

class Eevee extends Pokemon {
  constructor() {
    super("Eevee", 55, 18, "Headbutt", "normal");
  }
}
class Flareon extends Pokemon {
  constructor() {
    super("Flareon", 65, 20, "Fire blast", "fire");
  }
}
class Vaporeon extends Pokemon {
  constructor() {
    super("Vaporeon", 70, 19, "Hydro pump", "water");
  }
}
class Leafeon extends Pokemon {
  constructor() {
    super("Leafeon", 65, 17, "Giga drain", "grass");
  }
}
class Squirtle extends Pokemon {
  constructor() {
    super("Squirtle", 44, 16, "Surf", "water");
  }
}
class Charmander extends Pokemon {
  constructor() {
    super("Charmander", 44, 17, "Flamethrower", "fire");
  }
}
class Bulbasaur extends Pokemon {
  constructor() {
    super("Bulbasaur", 45, 16, "Razor leaf", "grass");
  }
}

module.exports = {
  Pokemon,
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
};
