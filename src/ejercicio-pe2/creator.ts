/* eslint-disable no-unused-vars */
import {Blastoise, Pokemon, Venusaur, Charizard, Pikachu} from './pokemon';
import {Types} from './var';

/**
 * Clase abstracta para crear una fabrica de pokemon
 * @method factoryMethod devuelve un pokemon del tipo de la fábrica
 * @method logic muesta los datos de la fabrica
 */
export abstract class PokemonCreator {
  public abstract factoryMethod() : Pokemon;

  public logic() : void {
    const poke = this.factoryMethod();
    poke.print();
  }
}

/**
 * Clase que genera un pikachu con sus caracteristicas
 * @method factoryMethod invoca al constructor de Pikachu
 */
export class PikachuCreator extends PokemonCreator {
  constructor(private name : string, private pokemonHeight : number,
    private pokemonWeight : number, private stats : number[],
    private pokemonType : string, private pokemonSecondType? : string) {
    super();
  }

  public factoryMethod(): Pokemon {
    return new Pikachu(this.name, this.pokemonHeight, this.pokemonWeight,
        this.stats, this.pokemonType);
  }
}

/**
 * Clase que genera un charizard con sus caracteristicas
 * @method factoryMethod invoca al constructor de Charizard
 */
export class CharizardCreator extends PokemonCreator {
  constructor(private name : string, private pokemonHeight : number,
    private pokemonWeight : number, private stats : number[],
    private pokemonType : string, private pokemonSecondType? : string) {
    super();
  }

  public factoryMethod(): Pokemon {
    return new Charizard(this.name, this.pokemonHeight, this.pokemonWeight,
        this.stats, this.pokemonType, this.pokemonSecondType);
  }
}

/**
 * Clase que genera un blastoise con sus caracteristicas
 * @method factoryMethod invoca al constructor de Blastoise
 */
export class BlastoiseCreator extends PokemonCreator {
  constructor(private name : string, private pokemonHeight : number,
    private pokemonWeight : number, private stats : number[],
    private pokemonType : string, private pokemonSecondType? : string) {
    super();
  }

  public factoryMethod(): Pokemon {
    return new Blastoise(this.name, this.pokemonHeight, this.pokemonWeight,
        this.stats, this.pokemonType, this.pokemonSecondType);
  }
}

/**
 * Clase que genera un venusaur con sus caracteristicas
 * @method factoryMethod invoca al constructor de Venusaur
 */
export class VenusaurCreator extends PokemonCreator {
  constructor(private name : string, private pokemonHeight : number,
    private pokemonWeight : number, private stats : number[],
    private pokemonType : string, private pokemonSecondType? : string) {
    super();
  }

  public factoryMethod(): Pokemon {
    return new Venusaur(this.name, this.pokemonHeight, this.pokemonWeight,
        this.stats, this.pokemonType, this.pokemonSecondType);
  }
}
