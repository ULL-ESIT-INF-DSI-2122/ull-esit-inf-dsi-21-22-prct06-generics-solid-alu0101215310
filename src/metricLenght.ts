/* eslint-disable no-unused-vars */
export enum metric {
  centimetros = 0,
  metros = 1,
  kilometros = 2
}
/**
 * @class MetricLenght : Representa los cambios entre magnitudes imperiales
 * @constructor : Asigna un valor númerico y su unidad métrica
 */
export class MetricLenght {
  constructor(public num : number, public med : string) {};

  /**
  * @method toCm : Cambia de cualquier unidad métrica a centimetros
  */
  toCm() {
    if (this.med === metric[1]) this.num = this.num / 100;
    if (this.med === metric[2]) this.num = this.num / 1000 / 100;
    this.med = metric[0];
  }
  /**
   * @method toM : Cambia de cualquier unidad métrica a metros
   */
  toM() {
    if (this.med === metric[0]) this.num = this.num * 100;
    if (this.med === metric[2]) this.num = this.num / 1000;
    this.med = metric[1];
  }

  /**
   * @method toKm : Cambia de cualquier unidad métrica a kilómetros
   */
  toKm() {
    if (this.med === metric[0]) this.num = this.num * 100 * 1000;
    if (this.med === metric[1]) this.num = this.num * 1000;
    this.med = metric[2];
  }
}
