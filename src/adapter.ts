import {MetricLenght} from './metricLenght';
import {metric} from './metricLenght';
import {ImperialLenght} from './imperialLenght';
import {imperial} from './imperialLenght';

/**
 * @class Adapter : Adapta una magnitud imperial para convertirla a métrica
 * @constructor : Como diferencia de la clase padre crea un servicio de tipo
 * ImperialLenght
 */
export class Adapter extends MetricLenght {
  constructor(num : number, med : string, private service : ImperialLenght) {
    super(num, med);
  }

  /**
   * @method toCm : Cambia de cualquier unidad imperial a centimetros
   */
  toCm() {
    if (this.service.med === imperial[0]) this.num = this.service.num * 2.54;
    if (this.service.med === imperial[1]) {
      this.num = this.service.num * 0.3048 * 100;
    }
    if (this.service.med === imperial[2]) {
      this.num = this.service.num * 0.9144 * 100;
    }
    if (this.service.med === imperial[3]) {
      this.num = this.num * 1.6093 * 1000 * 100;
    }
    this.med = metric[0];
  }

  /**
   * @method toM : Cambia de cualquier unidad imperial a metros
   */
  toM() {
    if (this.service.med === imperial[0]) {
      this.num = this.service.num * 2.54 / 100;
    }
    if (this.service.med === imperial[1]) this.num = this.service.num * 0.3048;
    if (this.service.med === imperial[2]) this.num = this.service.num * 0.9144;
    if (this.service.med === imperial[3]) {
      this.num = this.service.num * 1.6093 * 1000;
    }
    this.med = metric[1];
  }

  /**
   * @method toKm : Cambia de cualquier unidad imperial a kilometros
   */
  toKm() {
    if (this.service.med === imperial[0]) {
      this.num = this.num * 2.54 / 100 / 1000;
    }
    if (this.service.med === imperial[1]) {
      this.num = this.service.num * 0.3048 / 1000;
    }
    if (this.service.med === imperial[2]) {
      this.num = this.service.num * 0.9144 / 1000;
    }
    if (this.service.med === imperial[3]) this.num = this.service.num * 1.6093;
    this.med = metric[2];
  }
}

const prueba = new ImperialLenght(25, imperial[0]);
console.log(prueba);
prueba.toFt();
console.log(prueba);
prueba.toYd();
console.log(prueba);
prueba.toMilla();
prueba.toPlg();
console.log(prueba);

const adp = new Adapter(0, '', prueba);
adp.toCm();
console.log(adp);
adp.toM();
console.log(adp);
adp.toKm();
console.log(adp);
