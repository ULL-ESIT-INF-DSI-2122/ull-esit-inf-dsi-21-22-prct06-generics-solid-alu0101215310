import {Fighter} from './fighter';

export type pokedexPos = [number, Fighter];

export class Dex {
  private list : pokedexPos[];

  constructor() {
    this.list = [];
  };

  addFighter(fighter : Fighter) {
    this.list.push([this.list.length + 1, fighter]);
  }

  selectFighter(pos : number) {
    return this.list[pos-1][1];
  }

  print() {
    console.log('DEX');
    this.list.forEach((fighter) => {
      console.log(`${fighter[0]} - ${fighter[1].name}`);
    });
  }
};
