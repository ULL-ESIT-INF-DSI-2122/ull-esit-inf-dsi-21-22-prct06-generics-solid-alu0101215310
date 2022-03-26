/* eslint-disable no-unused-vars */
import {Fighter, Stats} from './fighter';
import {Dex} from './dex';
import {DC} from './dc';
import {DragonBall} from './dragonBall';
import {Marvel} from './marvel';
import {Pokemon} from './pokemon';
import {StarWars} from './starWars';

import {Types} from './pokemon';

export class Combat {
  constructor() {}

  start(firstFighter : Fighter, secondFighter : Fighter) {
    let firstFighterHP = firstFighter.getStats()[0][1];
    let secondFighterHP = secondFighter.getStats()[0][1];
    let turnCounter = 1;
    console.log(`\n${firstFighter.name} vs ${secondFighter.name}\n`);
    while (firstFighterHP > 0 && secondFighterHP > 0) {
      console.log(`- Turno ${turnCounter}`);
      if (firstFighter.getStats()[5][1] >= secondFighter.getStats()[5][1]) {
        const damage = this.damageCalculator(firstFighter, secondFighter);
        secondFighterHP = secondFighterHP - damage[1];
        if (secondFighterHP <= 0) {
          console.log(`${firstFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciendo ${firstFighter.getPhrase()},
            a ${secondFighter.name} no le quedan puntos de vida.`);
          break;
        }
        firstFighterHP = firstFighterHP - damage[0];
        if (firstFighterHP <= 0) {
          console.log(`${firstFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciedno ${firstFighter.getPhrase()},
        a ${secondFighter.name} le quedan ${secondFighterHP} puntos de vida.`);
          console.log(`${secondFighter.name} ataca causando
            ${damage[0]} puntos de daño y diciendo ${secondFighter.getPhrase()},
        a ${firstFighter.name} no le quedan puntos de vida.`);
          break;
        }
        if (damage[0] === 0 && damage[1] === 0) {
          console.log(`No se puede combatir ya que los tipos de
            ataque de ambos pokemon no afectan al rival`);
          break;
        }
        if (damage[1] === 0) {
          console.log(`${firstFighter.name} ataca, pero no
            le afecta a ${secondFighter.name}`);
        } else {
          console.log(`${firstFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciedno ${firstFighter.getPhrase()},
        a ${secondFighter.name} le quedan ${secondFighterHP} puntos de vida.`);
        }
        if (damage[0] === 0) {
          console.log(`${secondFighter.name} ataca, pero no
            le afecta a ${firstFighter.name}`);
        } else {
          console.log(`${secondFighter.name} ataca causando
            ${damage[0]} puntos de daño y diciendo ${secondFighter.getPhrase()},
        a ${firstFighter.name} no le quedan puntos de vida.`);
        }
      } else {
        const damage = this.damageCalculator(secondFighter, firstFighter);
        firstFighterHP = firstFighterHP - damage[1];
        if (firstFighterHP <= 0) {
          console.log(`${secondFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciendo ${secondFighter.getPhrase()},
            a ${firstFighter.name} no le quedan puntos de vida.`);
          break;
        }
        secondFighterHP = secondFighterHP - damage[0];
        if (secondFighterHP <= 0) {
          console.log(`${secondFighter.name} ataca causando
            ${damage[0]} puntos de daño y diciendo ${secondFighter.getPhrase()},
        a ${firstFighter.name} no le quedan puntos de vida.`);
          console.log(`${firstFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciedno ${firstFighter.getPhrase()},
        a ${secondFighter.name} le quedan ${secondFighterHP} puntos de vida.`);
          break;
        }
        if (damage[0] === 0 && damage[1] === 0) {
          console.log(`No se puede combatir ya que los tipos de
            ataque de ambos pokemon no afectan al rival`);
          break;
        }
        if (damage[1] === 0) {
          console.log(`${secondFighter.name} ataca, pero no
            le afecta a ${firstFighter.name}`);
        } else {
          console.log(`${secondFighter.name} ataca causando
            ${damage[0]} puntos de daño y diciendo ${secondFighter.getPhrase()},
        a ${secondFighter.name} no le quedan puntos de vida.`);
        }
        if (damage[0] === 0) {
          console.log(`${firstFighter.name} ataca, pero no
            le afecta a ${secondFighter.name}`);
        } else {
          console.log(`${firstFighter.name} ataca causando
            ${damage[1]} puntos de daño y diciedno ${firstFighter.getPhrase()},
        a ${secondFighter.name} le quedan ${secondFighterHP} puntos de vida.`);
        }
      }
      turnCounter++;
    }
  }

  damageCalculator(firstFighter : Fighter, secondFighter : Fighter) {
    const vecDamage = [0, 0];
    const poeFirstFigther = this.physicalOrEspecial(firstFighter);
    const poeSecondtFighter = this.physicalOrEspecial(firstFighter);
    let efectividad = 1;
    if (firstFighter instanceof Pokemon && secondFighter instanceof Pokemon) {
      efectividad = this.efectividad(firstFighter.getType(),
          secondFighter.getType());
      if (secondFighter.getSecondType() != undefined) {
        efectividad = efectividad * this.efectividad(firstFighter.getType(),
            secondFighter.getType());
      }
    }
    if (poeFirstFigther === true) {
      const damage = 50 * (firstFighter.getStats()[1][1] /
            secondFighter.getStats()[2][1]) * efectividad;
      vecDamage[1] = damage;
    } else {
      const damage = 50 * (firstFighter.getStats()[3][1] /
            secondFighter.getStats()[4][1]) * efectividad;
      vecDamage[1] = damage;
    }
    if (poeSecondtFighter === true) {
      const damage = 50 * (secondFighter.getStats()[1][1] /
            firstFighter.getStats()[2][1]) * efectividad;
      vecDamage[0] = damage;
    } else {
      const damage = 50 * (secondFighter.getStats()[3][1] /
            firstFighter.getStats()[4][1]) * efectividad;
      vecDamage[0] = damage;
    }
    return vecDamage;
  }

  physicalOrEspecial(fighter : Fighter) {
    if (fighter.getStats()[1][1] >= fighter.getStats()[3][1]) {
      return true;
    } else return false;
  }

  efectividad(firstPokeType : string, secondPokeType : string) {
    let multiplicador = 1;
    switch (firstPokeType) {
      case Types[0]:
        if (secondPokeType === Types[0] || secondPokeType === Types[1] ||
          secondPokeType === Types[4] || secondPokeType === Types[6]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[7] || secondPokeType === Types[8] ||
          secondPokeType === Types[13]) multiplicador = 2;
        break;

      case Types[1]:
        if (secondPokeType === Types[1] || secondPokeType === Types[3] ||
          secondPokeType === Types[11]) multiplicador = 1/2;
        else if (secondPokeType === Types[6] || secondPokeType === Types[13] ||
          secondPokeType === Types[15]) multiplicador = 2;
        break;

      case Types[2]:
        if (secondPokeType === Types[0] || secondPokeType === Types[5] ||
          secondPokeType === Types[6] || secondPokeType === Types[7] ||
          secondPokeType === Types[9] || secondPokeType === Types[16] ||
          secondPokeType === Types[17]) multiplicador = 1/2;
        else if (secondPokeType === Types[11] || secondPokeType === Types[12] ||
          secondPokeType === Types[14]) multiplicador = 2;
        break;

      case Types[3]:
        if (secondPokeType === Types[0]) multiplicador = 1/2;
        else if (secondPokeType === Types[3]) multiplicador = 2;
        else if (secondPokeType === Types[7]) multiplicador = 0;
        break;

      case Types[4]:
        if (secondPokeType === Types[3] || secondPokeType === Types[4] ||
          secondPokeType === Types[11]) multiplicador = 1/2;
        else if (secondPokeType === Types[1] || secondPokeType === Types[17]) {
          multiplicador = 2;
        } else if (secondPokeType === Types[15]) multiplicador = 0;
        break;

      case Types[5]:
        if (secondPokeType === Types[14]) multiplicador = 1/2;
        else if (secondPokeType === Types[5] || secondPokeType === Types[12]) {
          multiplicador = 2;
        } else if (secondPokeType === Types[10]) multiplicador = 0;
        break;

      case Types[6]:
        if (secondPokeType === Types[1] || secondPokeType === Types[3] ||
          secondPokeType === Types[6] || secondPokeType === Types[13]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[0] || secondPokeType === Types[2] ||
          secondPokeType === Types[8] || secondPokeType === Types[11]) {
          multiplicador = 2;
        }
        break;

      case Types[7]:
        if (secondPokeType === Types[0] || secondPokeType === Types[6] ||
          secondPokeType === Types[16]) multiplicador = 1/2;
        else if (secondPokeType === Types[3] || secondPokeType === Types[9] ||
          secondPokeType === Types[14]) multiplicador = 2;
        break;

      case Types[8]:
        if (secondPokeType === Types[0] || secondPokeType === Types[1] ||
          secondPokeType === Types[6] || secondPokeType === Types[8]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[3] || secondPokeType ===Types[11] ||
          secondPokeType === Types[15] || secondPokeType === Types[17]) {
          multiplicador = 2;
        }
        break;

      case Types[9]:
        if (secondPokeType === Types[2] || secondPokeType === Types[7] ||
          secondPokeType === Types[12] || secondPokeType === Types[16] ||
          secondPokeType === Types[17]) multiplicador = 1/2;
        else if (secondPokeType === Types[0] || secondPokeType === Types[8] ||
          secondPokeType === Types[10] || secondPokeType === Types[13] ||
          secondPokeType === Types[14]) multiplicador = 2;
        else if (secondPokeType === Types[5]) multiplicador = 0;
        break;

      case Types[10]:
        if (secondPokeType === Types[0] || secondPokeType === Types[13]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[5]) multiplicador = 0;
        break;

      case Types[11]:
        if (secondPokeType === Types[0] || secondPokeType === Types[2] ||
          secondPokeType === Types[3] || secondPokeType === Types[6] ||
          secondPokeType === Types[11] || secondPokeType === Types[16] ||
          secondPokeType === Types[17]) multiplicador = 1/2;
        else if (secondPokeType === Types[1] || secondPokeType === Types[13] ||
          secondPokeType === Types[15]) multiplicador = 2;
        break;

      case Types[12]:
        if (secondPokeType === Types[0] || secondPokeType === Types[12]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[9] || secondPokeType ===Types[16]) {
          multiplicador = 2;
        } else if (secondPokeType === Types[14]) multiplicador = 0;
        break;

      case Types[13]:
        if (secondPokeType === Types[0] || secondPokeType === Types[9] ||
          secondPokeType === Types[15]) multiplicador = 1/2;
        else if (secondPokeType === Types[2] || secondPokeType === Types[6] ||
          secondPokeType === Types[8] || secondPokeType === Types[17]) {
          multiplicador = 2;
        }
        break;

      case Types[14]:
        if (secondPokeType === Types[7] || secondPokeType === Types[9] ||
          secondPokeType === Types[14]) multiplicador = 1/2;
        else if (secondPokeType === Types[5] || secondPokeType === Types[12]) {
          multiplicador = 2;
        }
        break;

      case Types[15]:
        if (secondPokeType === Types[2] || secondPokeType === Types[11]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[0] || secondPokeType === Types[4] ||
          secondPokeType === Types[6] || secondPokeType === Types[13] ||
          secondPokeType === Types[16]) multiplicador = 2;
        else if (secondPokeType === Types[17]) multiplicador = 0;
        break;

      case Types[16]:
        if (secondPokeType === Types[5] || secondPokeType === Types[13] ||
          secondPokeType === Types[15] || secondPokeType === Types[16]) {
          multiplicador = 1/2;
        } else if (secondPokeType === Types[7] || secondPokeType ===Types[11]) {
          multiplicador = 2;
        } else if (secondPokeType === Types[0]) multiplicador = 0;
        break;

      case Types[17]:
        if (secondPokeType === Types[0] || secondPokeType === Types[4] ||
          secondPokeType === Types[13]) multiplicador = 1/2;
        else if (secondPokeType === Types[2] || secondPokeType === Types[9] ||
          secondPokeType === Types[11]) multiplicador = 2;
        break;
    }
    return multiplicador;
  }
};

const combat = new Combat();
const fighter1 = new Marvel('Spiderman', 10, 10);
fighter1.setStats([500, 200, 200, 300, 300, 500]);
fighter1.setPhrase('Soy el hombre araña');
const fighter2 = new DC('Batman', 30, 50);
fighter2.setStats([500, 200, 200, 300, 300, 500]);
fighter2.setPhrase('Yo soy Batman');
combat.start(fighter1, fighter2);
