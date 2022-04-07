/* eslint-disable no-unused-vars */

/**
 * Tipos de los pokemon
 */
export enum Types {
  acero = 0,
  agua = 1,
  bicho = 2,
  dragón = 3,
  eléctrico = 4,
  fantasma = 5,
  fuego = 6,
  hada = 7,
  hielo = 8,
  lucha = 9,
  normal = 10,
  planta = 11,
  psíquico = 12,
  roca = 13,
  siniestro = 14,
  tierra = 15,
  veneno = 16,
  volador = 17
};

/**
 * Estructura de las estadisticas de los pokemon
 */
export enum TypeStats {
  puntosDeSalud = 0,
  ataque = 1,
  defensa = 2,
  ataqueEspecial = 3,
  defensaEspecial = 4,
  velocidad = 5
}

/**
 * Tipo de dato de las estadísticas de los pokemon
 */
export type Stats = [string, number];
