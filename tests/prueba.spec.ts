import 'mocha';
import {expect} from 'chai';
import {Complex} from '../src/ejercicio-pe';

const com1 = new Complex(1, 3);
const com2 = new Complex(2, 4);

describe('Complex class test', () => {
  it('add function test', () => {
    expect(com1.add(com2)).to.be.equal(new Complex(3, 7));
    expect(com2.add(com1)).to.be.equal(new Complex(3, 7));
  });
  it('substract function test', () => {
    expect(com1.substract(com2)).to.be.equal(new Complex(-1, -1));
    expect(com2.substract(com1)).to.be.equal(new Complex(1, 1));
  });
  it('multiply function test', () => {
    expect(com1.multiply(com2)).to.be.equal(new Complex(9, 10));
    expect(com2.multiply(com1)).to.be.equal(new Complex(9, 10));
  });
});
