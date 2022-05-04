const inquirer = require("inquirer");
const {
  Eevee,
  Flareon,
  Vaporeon,
  Leafeon,
  Charmander,
  Squirtle,
  Bulbasaur,
} = require("./pokemon");
const Trainer = require("./trainer");
const Battle = require("./battle");

let userTrainer = {};
let battle = {};
const answers = {};

const misty = new Trainer("Misty");
const brock = new Trainer("Brock");
misty.catch("squirtle");
brock.catch("bulbasaur");

// const eevee = new Eevee;
// const flareon = new Flareon;
// const vaporeon = new Vaporeon;
// const leafeon = new Leafeon;
// const charmander = new Charmander;
// const squirtle = new Squirtle;
// const bulbasaur = new Bulbasaur;

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: `Hello trainer. What's your name?`,
      validate: (value) => {
        if (value.length < 11) {
          const pass = value.match(/[A-Z]+/i);
          if (pass) {
            return true;
          }
        } else {
          return "Name must be 10 characters or less";
        }
      },
    },
  ])
  .then((answer) => {
    userTrainer = new Trainer(answer.name);
  })
  .then(() => {
    choosePokemon();
  });

function choosePokemon() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "pokemon",
        message: `Hi ${userTrainer.name}, choose a pokemon to look at.`,
        choices: [
          "Eevee",
          "Flareon",
          "Vaporeon",
          "Leafeon",
          "Charmander",
          "Squirtle",
          "Bulbasaur",
        ],
      },
    ])
    .then((answer) => {
      const { pokemon } = answer;
      answers.pokemon = pokemon;
      switch (pokemon) {
        case "Eevee":
          console.log(new Eevee());
          break;
        case "Flareon":
          console.log(new Flareon());
          break;
        case "Vaporeon":
          console.log(new Vaporeon());
          break;
        case "Leafeon":
          console.log(new Leafeon());
          break;
        case "Charmander":
          console.log(new Charmander());
          break;
        case "Squirtle":
          console.log(new Squirtle());
          break;
        case "Bulbasaur":
          console.log(new Bulbasaur());
      }
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "pokemonLook",
            message: "Choose this pokemon?",
          },
        ])
        .then((answer) => {
          if (answer.pokemonLook === true) {
            userTrainer.catch(answers.pokemon);
            console.log(`You caught ${userTrainer.pokemon[0].name}`);
            chooseRival();
          } else {
            choosePokemon();
          }
        });
    });
}

function chooseRival() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "rival",
        message: `Choose a rival to look at.`,
        choices: ["Misty", "Brock"],
      },
    ])
    .then((answer) => {
      const { rival } = answer;
      switch (rival) {
        case "Misty":
          answers.rival = new Trainer("Misty");
          answers.rival.catch("squirtle");
          console.log(misty);
          break;
        case "Brock":
          answers.rival = new Trainer("Brock");
          answers.rival.catch("bulbasaur");
          console.log(brock);
      }
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "rivalLook",
            message: `Battle ${answers.rival.name}?`,
          },
        ])
        .then((answer) => {
          if (answer.rivalLook === true) {
            battle = new Battle(
              userTrainer,
              answers.rival,
              userTrainer.pokemon[0],
              answers.rival.pokemon[0]
            );
            battleRival();
          } else {
            chooseRival();
          }
        });
    });
}

function battleRival() {
  if (battle.isAttackersTurn === false) {
    console.log(
      `${answers.rival.name}'s ${answers.rival.pokemon[0].name} attacks!`
    );
    battle.fight();
    if (userTrainer.pokemon[0].hitpoints < 0) {
      loser();
    } else {
      console.log(
        `${userTrainer.pokemon[0].name}'s hp is now ${userTrainer.pokemon[0].hitpoints}.`
      );
    }
  }
  if (userTrainer.pokemon[0].hitpoints > 0) {
    inquirer
      .prompt([
        {
          type: "list",
          name: "battle",
          message: `${userTrainer.pokemon[0].name}'s' hp is ${userTrainer.pokemon[0].hitpoints}. ${answers.rival.pokemon[0].name}'s hp is ${answers.rival.pokemon[0].hitpoints}. What do you want to do?`,
          choices: [userTrainer.pokemon[0].move, "run"],
        },
      ])
      .then((answer) => {
        switch (answer.battle) {
          case userTrainer.pokemon[0].move:
            battle.fight();
            if (answers.rival.pokemon[0].hitpoints < 0) {
              winner();
            } else {
              console.log(
                `${answers.rival.pokemon[0].name}'s hp is now ${answers.rival.pokemon[0].hitpoints}.`
              );
              console.log();
              battleRival();
            }
            break;
          case "run":
            if (userTrainer.pokemon[0].hitpoints >= 15) {
              console.log("You escaped");
              chooseRival();
            } else {
              console.log("You are too weak to escape");
              battleRival();
            }
        }
      });
  }
}

function loser() {
  console.log("You lost. GAME OVER!");
}

function winner() {
  console.log("WELL DONE");
}

// name must be one word
//refactor to inquirer.md example
// refactor and make dry, if statements and make long variables/dot notation paths shorter
