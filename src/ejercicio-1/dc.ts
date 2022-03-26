/* eslint-disable no-unused-vars */
import {Fighter} from './fighter';
import {Stats} from './fighter';
import {TypeStats} from './fighter';

export class DC extends Fighter {
  private phrase : string;
  private stats : Stats[];

  constructor(public name : string, public height : number,
    public weight : number) {
    super(name, height, weight);
  };

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
    console.log(`- Héroe: ${this.name}`);
    console.log(`- Altura: ${this.height} cm`);
    console.log(`- Peso: ${this.weight} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};
