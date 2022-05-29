//#region Imports

import { FreelancerProxy } from './freelancer.proxy';

//#endregion

/**
 * A interface que representa os resultados paginados dos freelancers
 */
export interface PaginatedFreelancerProxy {

  /**
   * O indice atual da paginação
   */
  currentPage: number;

  /**
   * O total de paǵinas dessa paginação
   */
  pageCount: number;

  /**
   * O total de itens por página
   */
  maxItens: number;

  /**
   * Os itens dessa páginação
   */
  items: FreelancerProxy[];
}
