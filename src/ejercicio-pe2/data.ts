/* eslint-disable no-unused-vars */
import {BlastoiseCreator, CharizardCreator,
  PikachuCreator, VenusaurCreator} from './creator';
import {Types} from './var';

export const PikachuFabric = new PikachuCreator('Pikachu', 40, 6,
    [274, 209, 179, 199, 199, 279], Types[4]);
PikachuFabric.logic();
const Pikachu1 = PikachuFabric.factoryMethod();
const Pikachu2 = PikachuFabric.factoryMethod();

export const CharizardFabric = new CharizardCreator('Charizard', 290, 60,
    [274, 209, 179, 199, 199, 279], Types[4]);
CharizardFabric.logic();
const Charizard1 = CharizardFabric.factoryMethod();
const Charizard2 = CharizardFabric.factoryMethod();

export const BlastoiseFabric = new BlastoiseCreator('Blastoise', 400, 63,
    [274, 209, 179, 199, 199, 279], Types[4]);
BlastoiseFabric.logic();
const Blastoise1 = BlastoiseFabric.factoryMethod();
const Blastoise2 = BlastoiseFabric.factoryMethod();

export const VenusaurFabric = new VenusaurCreator('Venusaur', 220, 16,
    [274, 209, 179, 199, 199, 279], Types[4]);
VenusaurFabric.logic();
const Venusaur1 = VenusaurFabric.factoryMethod();
const Venusaur2 = VenusaurFabric.factoryMethod();
