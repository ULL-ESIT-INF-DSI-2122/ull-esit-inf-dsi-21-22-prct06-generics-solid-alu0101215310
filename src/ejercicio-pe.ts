/**
 * @interface Arithmeticable : interfaz genérica para operaciones aritméticas
 * @method add : suma de dos tipos de datos
 * @method substract : resta de dos tipos de datos
 * @method multiply : multiplica dos tipos de datos
 * @method divide : divide dos tipos de datos
 */
interface Arithmeticable<T>{
  add(first : T) : T;
  substract(first : T) : T;
  multiply(first : T) : T;
  divide(first : T) : T;
}

/**
 * @class ArithmeticableCollection : Representa una colección de datos génerico
 * que permita la interfaz Arithmeticable
 * @method addArithmeticable : añade un objeto a la colección
 * @method getArithmeticable : devuelve el objeto buscado
 * @method getNumberOfArithmeticables : devuelve el tamaño de la colección
 */
class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private list : T[] = [];
  constructor() {};

  addArithmeticable(item : T) {
    this.list.push(item);
  }
  getArithmeticable(search : T) {
    return this.list.filter((element) => element === search);
  }
  getNumberOfArithmeticables() {
    return this.list.length;
  }
}

/**
 * @class Complex : Representa un número complejo
 * @method add : suma dos números complejos
 * @method subImg : resta dos números complejos
 * @method multiply : multiplica dos números complejos
 * @method divide : divide dos números complejos
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(private real : number, private img : number) {}

  add(num : Complex) : Complex {
    const addReal = this.real + num.real;
    const addImg = this.img + num.img;
    return new Complex(addReal, addImg);
  }
  substract(num: Complex) : Complex {
    const subReal = this.real - num.real;
    const subImg = this.img - num.img;
    return new Complex(subReal, subImg);
  }
  multiply(num: Complex): Complex {
    const mulReal = this.real * num.real + this.img + num.img;
    const mulImg = this.real * num.img + this.img * num.real;
    return new Complex(mulReal, mulImg);
  }
  divide(num: Complex): Complex {
    return this;
  }
}

const com1 = new Complex(1, 3);
const com2 = new Complex(2, 4);
const collection = new ArithmeticableCollection();
collection.addArithmeticable(com1);
collection.addArithmeticable(com2);
console.log(com1.add(com2));
console.log(com2.add(com1));
console.log(com1.substract(com2));
console.log(com2.substract(com1));
console.log(com1.multiply(com2));
console.log(com2.multiply(com1));
