/* eslint-disable no-unused-vars */
import {Fighter} from './fighter';
import {Stats} from './fighter';
import {TypeStats} from './fighter';

export enum Types {
  acero = 0,
  agua = 1,
  bicho = 2,
  dragón = 3,
  eléctrico = 4,
  fantasma = 5,
  fuego = 6,
  hada = 7,
  hielo = 8,
  lucha = 9,
  normal = 10,
  planta = 11,
  psíquico = 12,
  roca = 13,
  siniestro = 14,
  tierra = 15,
  veneno = 16,
  volador = 17
};

export class Pokemon extends Fighter {
  private pokemonType : string;
  private pokemonSecondType : string;
  private phrase : string;
  private stats : Stats[];

  constructor(public name : string, public height : number,
    public weight : number) {
    super(name, height, weight);
  };

  setType(type : number) {
    this.pokemonType = Types[type];
  }
  getType() {
    return this.pokemonType;
  }

  setSecondType(type : number) {
    this.pokemonSecondType = Types[type];
  }
  getSecondType() {
    return this.pokemonSecondType;
  }

  setStats(stats : number[]) {
    this.stats = [[TypeStats[0], stats[0]], [TypeStats[1], stats[1]],
      [TypeStats[2], stats[2]], [TypeStats[3], stats[3]],
      [TypeStats[4], stats[4]], [TypeStats[5], stats[5]]];
  }
  getStats() {
    return this.stats;
  }

  setPhrase(chain : string) {
    this.phrase = chain;
  }
  getPhrase() {
    return this.phrase;
  }

  print() {
    console.log(`- Pokemon: ${this.name}`);
    console.log(`- Tipo principal: ${this.getType()}`);
    if (this.getSecondType() != undefined) {
      console.log(`- Tipo secundario: ${this.getSecondType()}`);
    }
    console.log(`- Altura: ${this.height} cm`);
    console.log(`- Peso: ${this.weight} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};
