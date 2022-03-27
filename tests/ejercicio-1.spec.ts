/* eslint-disable no-unused-vars */
import 'mocha';
import {expect} from 'chai';

import {Fighter, Stats} from '../src/ejercicio-1/fighter';
import {Dex} from '../src/ejercicio-1/dex';
import {Combat} from '../src/ejercicio-1/combat';
import {DC} from '../src/ejercicio-1/dc';
import {DragonBall} from '../src/ejercicio-1/dragonBall';
import {Marvel} from '../src/ejercicio-1/marvel';
import {Pokemon, Types} from '../src/ejercicio-1/pokemon';
import {StarWars} from '../src/ejercicio-1/starWars';

const fighterMarvel = new Marvel('Spiderman', 170, 60);
fighterMarvel.setStats([300, 200, 100, 150, 100, 500]);
fighterMarvel.setPhrase('Soy el hombre araña');

const fighterDc = new DC('Batman', 180, 85);
fighterDc.setStats([500, 100, 200, 100, 200, 100]);
fighterDc.setPhrase('Yo soy batman');

const fighterDragonBall = new DragonBall('Goku', 190, 140);
fighterDragonBall.setStats([300, 300, 200, 400, 300, 400]);
fighterDragonBall.setPhrase('Kame Hame Ha');

const fighterStarWars = new StarWars('Anakin', 185, 80);
fighterStarWars.setStats([200, 400, 200, 200, 100, 300]);
fighterStarWars.setPhrase('No sucumbiré al lado oscuro');

const fighterPokemon1 = new Pokemon('Pikachu', 40, 40);
fighterPokemon1.setStats([200, 300, 200, 400, 100, 300]);
fighterPokemon1.setType(Types.eléctrico);
fighterPokemon1.setPhrase('Pika Pi');

const fighterPokemon2 = new Pokemon('Charizard', 120, 200);
fighterPokemon2.setStats([250, 400, 300, 200, 300, 250]);
fighterPokemon2.setType(Types.fuego);
fighterPokemon2.setSecondType(Types.volador);
fighterPokemon2.setPhrase('Gruaaaghh');

const dex = new Dex();
dex.addFighter(fighterDc);
dex.addFighter(fighterDragonBall);
dex.addFighter(fighterMarvel);
dex.addFighter(fighterStarWars);
dex.addFighter(fighterPokemon1);
dex.addFighter(fighterPokemon2);
const combate = new Combat();

describe('Combate definitivo test', () => {
  it('instanceOf fighters', () => {
    expect(fighterDc).be.instanceOf(Fighter);
    expect(fighterDragonBall).be.instanceOf(Fighter);
    expect(fighterMarvel).be.instanceOf(Fighter);
    expect(fighterStarWars).be.instanceOf(Fighter);
    expect(fighterPokemon1).be.instanceOf(Fighter);
    expect(fighterPokemon2).be.instanceOf(Fighter);
  });
  it('instanceOf dex & combate', () => {
    expect(dex).be.instanceOf(Dex);
    expect(combate).be.instanceOf(Combat);
  });
  it('instanceOf efectividad', () => {
    expect(combate.efectividad(fighterPokemon1.getType(),
        fighterPokemon2.getSecondType())).to.be.eql(2);
    expect(combate.efectividad(fighterPokemon2.getType(),
        fighterPokemon1.getType())).to.be.eql(1);
  });
});
