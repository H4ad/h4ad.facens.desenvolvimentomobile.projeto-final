//#region Imports

//#endregion

import { rand, randProductCategory } from '@ngneat/falso';

/**
 * A interface que representa as informações de uma categoria vindas da API
 */
export interface CategoryProxy {

  /**
   * A identificação dessa categoria
   */
  id: number;

  /**
   * O nome dessa categoria
   */
  name: string;

  /**
   * A cor dessa categoria
   */
  color: string;

}

/**
 * Método que retorna uns valores de uma categoria
 */
export function getFakeCategoryProxy(): CategoryProxy {
  return {
    id: 1,
    name: randProductCategory(),
    color: rand(['#FF565E', '#3ED598', '#FFC542']),
  };
}
