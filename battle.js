const Trainer = require("./trainer");
const { pokemonArray } = require("./pokemon");

trainersArray = [new Trainer("Ash"), new Trainer("Misty")];
const trainersNames = [];
trainersArray.forEach((trainer) => {
  trainersNames.push(trainer.name);
});

class Battle {
  constructor(trainerA, trainerB, trainerAPokemon, trainerBPokemon) {
      this.trainerA = trainerA;
    if (trainersNames.includes(trainerB.name)) {
      this.trainerB = trainerB;
    }
    this.trainerAPokemon = trainerAPokemon;
    this.trainerBPokemon = trainerBPokemon;
    this.isAttackersTurn = true;
  }
  fight() {
    let modifier = 1;
    let attackingPokemon = this.trainerAPokemon;
    let defendingPokemon = this.trainerBPokemon;
    let effectivenessString = "";

    if (this.isAttackersTurn === false) {
      attackingPokemon = this.trainerBPokemon;
      defendingPokemon = this.trainerAPokemon;
    }

    if (attackingPokemon.weakness === defendingPokemon.type) {
      modifier = 0.75;
    } else if (attackingPokemon.strength === defendingPokemon.type) {
      modifier = 1.25;
    }
    if (modifier === 1) {
      effectivenessString = "quite";
    } else if (modifier === 0.75) {
      effectivenessString = "not very";
    } else {
      effectivenessString = "very";
    }

    let attackString = `${attackingPokemon.name}'s ${attackingPokemon.move} was ${effectivenessString} effective.`;

    const modifiedAttack = attackingPokemon.attackDamage * modifier;

    defendingPokemon.hitpoints -= modifiedAttack;
    this.isAttackersTurn = !this.isAttackersTurn;

    console.log(attackingPokemon.talk);

    if (defendingPokemon.hitpoints <= 0) {
      attackString += ` ${defendingPokemon.name} fainted. ${attackingPokemon.name} wins!`;
    }

    console.log(attackString);
    // round up and down modified attacks
    return attackString;
  }
}

module.exports = Battle;
