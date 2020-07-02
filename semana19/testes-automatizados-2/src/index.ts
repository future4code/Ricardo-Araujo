import {Character} from "./models/Character";
import {validateCharacter} from "./services/validateCharacter";
import {performAttack} from "./services/performAttack";

const charmander: Character = {
    name: "Charmander",
    life: 10,
    strength: 15,
    defense: 10
};

const bulbasaur: Character = {
    name: "Bulbasaur",
    life: 10,
    strength: 15,
    defense: 10
};


performAttack(charmander,bulbasaur, validateCharacter);

console.log(bulbasaur.life);