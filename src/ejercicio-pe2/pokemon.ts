import {Stats, Types, TypeStats} from './var';

/**
 * @class Pokemon : representa un pokemon con sus caracteerísticas
 * @method print : Muestra por pantalla la ficha del Pokemon
 */
export class Pokemon {
  constructor(public name : string, public pokemonHeight : number,
    public pokemonWeight : number, public stats : number[],
    public pokemonType : string, public pokemonSecondType? : string) {}

  print() {
    console.log(`- Pokemon: ${this.name}`);
    console.log(`- Tipo principal: ${this.pokemonType}`);
    if (this.pokemonSecondType != undefined) {
      console.log(`- Tipo secundario: ${this.pokemonSecondType}`);
    }
    console.log(`- Altura: ${this.pokemonHeight} cm`);
    console.log(`- Peso: ${this.pokemonHeight} kg`);
    console.log(`- Estadísticas:`);
  }
};

/**
 * @class Pikachu : representa un Pikachu con sus características
 * @method getName : Devuelve el nombre el Pokemon
 * @method setType : Define el tipo principal del Pokemon
 * @method getType : Devuelve el tipo principal del Pokemon
 * @method setSecondType : Define el tipo secundario del Pokemon
 * @method getSecondType : Devuelve el tipo secundario del Pokemon
 * @method setHeight : Define la altura del Pokemon en cm
 * @method getHeight : Devuelve la altura del Pokemon en cm
 * @method setWeight : Define el peso del Pokemon en kg
 * @method getWeight : Devuelve el peso del Pokemon en kg
 * @method setStats : Define las estadísticas del Pokemon
 * @method getStats : Devuelve las estadísticas del Pokemon
 * @method print : Muestra por pantalla la ficha del Pokemon
 */
export class Pikachu extends Pokemon {
  private pokemonStats : Stats[];
  constructor(name : string, pokemonHeight : number,
      pokemonWeight : number, stats : number[],
      pokemonType : string) {
    super(name, pokemonHeight, pokemonWeight, stats, pokemonType);
    this.setStats(stats);
    this.pokemonStats = this.getStats();
  };

  getName() {
    return this.name;
  }

  setType(type : number) {
    this.pokemonType = Types[type];
  }
  getType() {
    return this.pokemonType;
  }

  setHeight(height : number) {
    this.pokemonHeight = height;
  }
  getHeight() {
    return this.pokemonHeight;
  }

  setWeight(weight : number) {
    this.pokemonWeight = weight;
  }
  getWeight() {
    return this.pokemonWeight;
  }

  setStats(stats : number[]) {
    this.pokemonStats = [[TypeStats[0], stats[0]], [TypeStats[1], stats[1]],
      [TypeStats[2], stats[2]], [TypeStats[3], stats[3]],
      [TypeStats[4], stats[4]], [TypeStats[5], stats[5]]];
  }
  getStats() {
    return this.pokemonStats;
  }

  print() {
    console.log(`- Pokemon: ${this.getName()}`);
    console.log(`- Tipo principal: ${this.getType()}`);
    console.log(`- Altura: ${this.getHeight()} cm`);
    console.log(`- Peso: ${this.getWeight()} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};

/**
 * @class Charizard : representa un Charizard con sus características
 * @method getName : Devuelve el nombre el Pokemon
 * @method setType : Define el tipo principal del Pokemon
 * @method getType : Devuelve el tipo principal del Pokemon
 * @method setSecondType : Define el tipo secundario del Pokemon
 * @method getSecondType : Devuelve el tipo secundario del Pokemon
 * @method setHeight : Define la altura del Pokemon en cm
 * @method getHeight : Devuelve la altura del Pokemon en cm
 * @method setWeight : Define el peso del Pokemon en kg
 * @method getWeight : Devuelve el peso del Pokemon en kg
 * @method setStats : Define las estadísticas del Pokemon
 * @method getStats : Devuelve las estadísticas del Pokemon
 * @method print : Muestra por pantalla la ficha del Pokemon
 */
export class Charizard extends Pokemon {
  private pokemonStats : Stats[];
  constructor(name : string, pokemonHeight : number,
      pokemonWeight : number, stats : number[],
      pokemonType : string, private pokemonSconsdType? : string) {
    super(name, pokemonHeight, pokemonWeight, stats, pokemonType);
    this.setStats(stats);
    this.pokemonStats = this.getStats();
  };

  getName() {
    return this.name;
  }

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

  setHeight(height : number) {
    this.pokemonHeight = height;
  }
  getHeight() {
    return this.pokemonHeight;
  }

  setWeight(weight : number) {
    this.pokemonWeight = weight;
  }
  getWeight() {
    return this.pokemonWeight;
  }

  setStats(stats : number[]) {
    this.pokemonStats = [[TypeStats[0], stats[0]], [TypeStats[1], stats[1]],
      [TypeStats[2], stats[2]], [TypeStats[3], stats[3]],
      [TypeStats[4], stats[4]], [TypeStats[5], stats[5]]];
  }
  getStats() {
    return this.pokemonStats;
  }

  print() {
    console.log(`- Pokemon: ${this.getName()}`);
    console.log(`- Tipo principal: ${this.getType()}`);
    if (this.getSecondType() != undefined) {
      console.log(`- Tipo secundario: ${this.getSecondType()}`);
    }
    console.log(`- Altura: ${this.getHeight()} cm`);
    console.log(`- Peso: ${this.getWeight()} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};

/**
 * @class Blastoise : representa un Blastoise con sus características
 * @method getName : Devuelve el nombre el Pokemon
 * @method setType : Define el tipo principal del Pokemon
 * @method getType : Devuelve el tipo principal del Pokemon
 * @method setSecondType : Define el tipo secundario del Pokemon
 * @method getSecondType : Devuelve el tipo secundario del Pokemon
 * @method setHeight : Define la altura del Pokemon en cm
 * @method getHeight : Devuelve la altura del Pokemon en cm
 * @method setWeight : Define el peso del Pokemon en kg
 * @method getWeight : Devuelve el peso del Pokemon en kg
 * @method setStats : Define las estadísticas del Pokemon
 * @method getStats : Devuelve las estadísticas del Pokemon
 * @method print : Muestra por pantalla la ficha del Pokemon
 */
export class Blastoise extends Pokemon {
  private pokemonStats : Stats[];
  constructor(name : string, pokemonHeight : number,
      pokemonWeight : number, stats : number[],
      pokemonType : string, private pokemonSconsdType? : string) {
    super(name, pokemonHeight, pokemonWeight, stats, pokemonType);
    this.setStats(stats);
    this.pokemonStats = this.getStats();
  };

  getName() {
    return this.name;
  }

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

  setHeight(height : number) {
    this.pokemonHeight = height;
  }
  getHeight() {
    return this.pokemonHeight;
  }

  setWeight(weight : number) {
    this.pokemonWeight = weight;
  }
  getWeight() {
    return this.pokemonWeight;
  }

  setStats(stats : number[]) {
    this.pokemonStats = [[TypeStats[0], stats[0]], [TypeStats[1], stats[1]],
      [TypeStats[2], stats[2]], [TypeStats[3], stats[3]],
      [TypeStats[4], stats[4]], [TypeStats[5], stats[5]]];
  }
  getStats() {
    return this.pokemonStats;
  }

  print() {
    console.log(`- Pokemon: ${this.getName()}`);
    console.log(`- Tipo principal: ${this.getType()}`);
    if (this.getSecondType() != undefined) {
      console.log(`- Tipo secundario: ${this.getSecondType()}`);
    }
    console.log(`- Altura: ${this.getHeight()} cm`);
    console.log(`- Peso: ${this.getWeight()} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};

/**
 * @class Venusaur : representa un Venusaur con sus características
 * @method getName : Devuelve el nombre el Pokemon
 * @method setType : Define el tipo principal del Pokemon
 * @method getType : Devuelve el tipo principal del Pokemon
 * @method setSecondType : Define el tipo secundario del Pokemon
 * @method getSecondType : Devuelve el tipo secundario del Pokemon
 * @method setHeight : Define la altura del Pokemon en cm
 * @method getHeight : Devuelve la altura del Pokemon en cm
 * @method setWeight : Define el peso del Pokemon en kg
 * @method getWeight : Devuelve el peso del Pokemon en kg
 * @method setStats : Define las estadísticas del Pokemon
 * @method getStats : Devuelve las estadísticas del Pokemon
 * @method print : Muestra por pantalla la ficha del Pokemon
 */
export class Venusaur extends Pokemon {
  private pokemonStats : Stats[];
  constructor(name : string, pokemonHeight : number,
      pokemonWeight : number, stats : number[],
      pokemonType : string, private pokemonSconsdType? : string) {
    super(name, pokemonHeight, pokemonWeight, stats, pokemonType);
    this.setStats(stats);
    this.pokemonStats = this.getStats();
  };

  getName() {
    return this.name;
  }

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

  setHeight(height : number) {
    this.pokemonHeight = height;
  }
  getHeight() {
    return this.pokemonHeight;
  }

  setWeight(weight : number) {
    this.pokemonWeight = weight;
  }
  getWeight() {
    return this.pokemonWeight;
  }

  setStats(stats : number[]) {
    this.pokemonStats = [[TypeStats[0], stats[0]], [TypeStats[1], stats[1]],
      [TypeStats[2], stats[2]], [TypeStats[3], stats[3]],
      [TypeStats[4], stats[4]], [TypeStats[5], stats[5]]];
  }
  getStats() {
    return this.pokemonStats;
  }

  print() {
    console.log(`- Pokemon: ${this.getName()}`);
    console.log(`- Tipo principal: ${this.getType()}`);
    if (this.getSecondType() != undefined) {
      console.log(`- Tipo secundario: ${this.getSecondType()}`);
    }
    console.log(`- Altura: ${this.getHeight()} cm`);
    console.log(`- Peso: ${this.getWeight()} kg`);
    console.log(`- Estadísticas:`);
    this.getStats().forEach((stat) => {
      console.log(`\t·${stat[0]} = ${stat[1]}`);
    });
  }
};
