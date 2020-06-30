import {Character} from "../models/Character";

export function performAttack(
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ){
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    };
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    };
};