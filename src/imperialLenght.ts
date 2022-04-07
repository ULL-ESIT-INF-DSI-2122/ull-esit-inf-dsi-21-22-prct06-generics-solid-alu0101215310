/* eslint-disable no-unused-vars */
export enum imperial {
  pulgadas = 0,
  pies = 1,
  yardas = 2,
  millas = 3
}

/**
 * @class ImperialLengh : Representa los cambios entre magnitudes imperiales
 * @constructor Asigna el valor numérico y el tipo de magnitud
 */
export class ImperialLenght {
  constructor(public num : number, public med : string) {};

  /**
   * @method toPlg : Cambia de cualquier unidad métrica a pulgadas
   */
  toPlg() {
    if (this.med === imperial[1]) this.num = this.num / 12;
    if (this.med === imperial[2]) this.num = this.num / 3 / 12;
    if (this.med === imperial[3]) this.num = this.num / 1760 / 3 / 12;
    this.med = imperial[0];
  }

  /**
   * @method toFt : Cambia de cualquier unidad métrica a pies
   */
  toFt() {
    if (this.med === imperial[0]) this.num = this.num * 12;
    if (this.med === imperial[2]) this.num = this.num / 3;
    if (this.med === imperial[3]) this.num = this.num / 1760 / 3;
    this.med = imperial[1];
  }

  /**
   * @method toYd : Cambia de cualquier unidad métrica a yardas
   */
  toYd() {
    if (this.med === imperial[0]) this.num = this.num * 12 * 3;
    if (this.med === imperial[1]) this.num = this.num * 3;
    if (this.med === imperial[3]) this.num = this.num / 1760;
    this.med = imperial[2];
  }

  /**
   * @method : Cambia de cualquier métrica unidad a millas
   */
  toMilla() {
    if (this.med === imperial[0]) this.num = this.num * 12 * 3 * 1760;
    if (this.med === imperial[1]) this.num = this.num * 3 * 1760;
    if (this.med === imperial[2]) this.num = this.num * 1760;
    this.med = imperial[3];
  }
}
