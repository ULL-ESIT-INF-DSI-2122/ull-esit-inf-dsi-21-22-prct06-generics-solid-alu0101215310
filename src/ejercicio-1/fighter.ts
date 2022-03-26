/* eslint-disable no-unused-vars */
export enum TypeStats {
  puntosDeSalud = 0,
  ataque = 1,
  defensa = 2,
  ataqueEspecial = 3,
  defensaEspecial = 4,
  velocidad = 5
}

export type Stats = [string, number];

export abstract class Fighter {
  constructor(public name : string, public height : number,
    public weight : number) {};

  abstract setStats(stats : number[]) : void;
  abstract getStats() : Stats[];

  abstract setPhrase(phrase : string) : void;
  abstract getPhrase() : string;

  abstract print() : void;
};
