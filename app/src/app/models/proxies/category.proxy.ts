//#region Imports

//#endregion

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
    name: `${ Math.random().toString(16).slice(2) }`,
    color: '#FFC542',
  };
}
