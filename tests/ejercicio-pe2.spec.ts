/* eslint-disable no-unused-vars */
import 'mocha';
import {assert} from 'chai';
import {PikachuFabric, CharizardFabric, BlastoiseFabric,
  VenusaurFabric} from '../src/ejercicio-pe2/data';
import {BlastoiseCreator, CharizardCreator, PikachuCreator,
  PokemonCreator, VenusaurCreator} from '../src/ejercicio-pe2/creator';

describe('Creator class test', () => {
  it('instanceOf fabrics', () => {
    assert.instanceOf(PikachuFabric, PokemonCreator);
    assert.instanceOf(CharizardFabric, PokemonCreator);
    assert.instanceOf(BlastoiseFabric, PokemonCreator);
    assert.instanceOf(VenusaurFabric, PokemonCreator);
  });
  it('Pikachu class test', () => {
    const Pikachu = PikachuFabric.factoryMethod();
    // assert.instanceOf(Pikachu, Pokemon);
    assert.typeOf(Pikachu.name, 'string');
    assert.typeOf(Pikachu.pokemonHeight, 'number');
    assert.typeOf(Pikachu.pokemonWeight, 'number');
    assert.typeOf(Pikachu.pokemonType, 'string');
  });
  it('Charizard class test', () => {
    const Charizard = PikachuFabric.factoryMethod();
    // assert.instanceOf(Charizard, Pokemon);
    assert.typeOf(Charizard.name, 'string');
    assert.typeOf(Charizard.pokemonHeight, 'number');
    assert.typeOf(Charizard.pokemonWeight, 'number');
    assert.typeOf(Charizard.pokemonType, 'string');
  });
  it('Blastoise class test', () => {
    const Blastoise = PikachuFabric.factoryMethod();
    // assert.instanceOf(Blastoise, Pokemon);
    assert.typeOf(Blastoise.name, 'string');
    assert.typeOf(Blastoise.pokemonHeight, 'number');
    assert.typeOf(Blastoise.pokemonWeight, 'number');
    assert.typeOf(Blastoise.pokemonType, 'string');
  });
  it('Venusaur class test', () => {
    const Venusaur = PikachuFabric.factoryMethod();
    // assert.instanceOf(Venusaur, Pokemon);
    assert.typeOf(Venusaur.name, 'string');
    assert.typeOf(Venusaur.pokemonHeight, 'number');
    assert.typeOf(Venusaur.pokemonWeight, 'number');
    assert.typeOf(Venusaur.pokemonType, 'string');
  });
});
